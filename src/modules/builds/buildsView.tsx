import React from "react";
import BuildsRail from "./buildsRail";
import './builds.scss';
import { Build } from "./interfaces";
import BuildEditor from "./buildEditor";
import { v4 as uuid } from 'uuid';

interface BuildsViewProps {}

interface BuildsViewState {
  buildId: string | null;
  builds: Build[];
}

const currentBuildIdKey = 'currentBuildId';
const buildsKey = 'builds';

export default class BuildView extends React.Component<BuildsViewProps, BuildsViewState> {
  constructor (props: BuildsViewProps) {
    super(props);

    this.state = {
      buildId: this.fetchCurrentBuildId(),
      builds: this.fetchStoredBuilds(),
    }
  }
  
  fetchCurrentBuildId = (): string | null => {
    return localStorage.getItem(currentBuildIdKey);
  }

  fetchStoredBuilds = (): Build[] => {
    try {
      return JSON.parse(localStorage.getItem(buildsKey) || '') as Build[] || [];
    } catch (e) {
      return [];
    }
  }

  addNewBuild = (build: Build) => {
    const { builds } = this.state;
    builds.push(build);
    localStorage.setItem(currentBuildIdKey, build.id);
    localStorage.setItem(buildsKey, JSON.stringify(builds));
    this.setState({
      buildId: build.id,
      builds
    });
  }

  changeCurrentBuild = (buildId: string | null) => {
    const { buildId: currentId } = this.state;
    if (buildId !== currentId) {
      if (buildId) {
        localStorage.setItem(currentBuildIdKey, buildId);
      } else {
        localStorage.removeItem(currentBuildIdKey);
      }
      this.setState({
        buildId
      });
    }
  }

  updateBuild = (build: Build) => {
    const {
      builds
    } = this.state;
    const index = builds.findIndex(b => b.id === build.id);
    if (index >= 0) {
      builds[index] = build;
      localStorage.setItem(buildsKey, JSON.stringify(builds));
      this.setState({ builds });
    }
  }

  removeBuild = () => {
    const {
      buildId,
      builds
    } = this.state;
    let index = builds.findIndex(build => build.id === buildId);
    if (index >= 0) {
      builds.splice(index, 1);
      localStorage.setItem(buildsKey, JSON.stringify(builds));
      this.setState({ builds });
      if (builds.length === 0) {
        localStorage.removeItem(currentBuildIdKey);
        this.setState({ buildId: null });
      } else {
        index = Math.min(index, builds.length - 1);
        localStorage.setItem(currentBuildIdKey, builds[index].id);
        this.setState({ buildId: builds[index].id });
      }
    }
  }

  duplicateBuild = () => {
    const {
      buildId,
      builds
    } = this.state;
    const original = builds.find(build => build.id === buildId);
    if (original) {
      const duplicate = {...original};
      duplicate.id = uuid();
      duplicate.label = `${duplicate.label} (copy)`;
      builds.push(duplicate);
      localStorage.setItem(buildsKey, JSON.stringify(builds));
      this.setState({ builds });
    }
  }
  
  render () {
    const {
      buildId,
      builds,
    } = this.state;
    const build = builds.find(build => build.id === buildId);
    return (
      <div className="builds-container">
        <BuildsRail 
          buildId={buildId} 
          builds={builds}
          addNewBuild={this.addNewBuild}
          changeCurrentBuild={this.changeCurrentBuild}
        />
        {build && <BuildEditor
          build={build}
          updateBuild={this.updateBuild}
          removeBuild={this.removeBuild}
          duplicateBuild={this.duplicateBuild}
        />}
      </div>
    )
  }
}