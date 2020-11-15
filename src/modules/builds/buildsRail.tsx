import React from "react";
import './builds.scss';
import { Build, defaultBuild } from "./interfaces";
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuid } from 'uuid';
import { characters } from "data/characters";

interface BuildsRailProps {
  buildId: string | null;
  builds: Build[];
  addNewBuild: (build: Build) => void;
  changeCurrentBuild: (buildId: string | null) => void;
}

export default class BuildsRail extends React.Component<BuildsRailProps,{}> {
  onAddNewBuildClick = () => {
    const newBuild: Build = {...defaultBuild};
    newBuild.id = uuid();
    this.props.addNewBuild(newBuild);
  }

  renderBuildOptions = (): JSX.Element => {
    const { buildId } = this.props;
    const options: JSX.Element[] = this.props.builds.map((option) => {
      return <div
        key={option.id}
        onClick={() => this.props.changeCurrentBuild(option.id)}
        className={`rail-option-container ${
          buildId === option.id ? 'rail-option-selected' : ''
        }`}
      >
        <div className="rail-option-icon">
          <img
            draggable={false}
            src={characters.get(option.characterId)?.icon()}
            alt={option.characterId}
          />
        </div>
        <div className="rail-option-label">
          {option.label}
        </div>
      </div>
    })
    return <div className="rail-options">
      {options}
    </div>
  }

  renderAddBuildButton = (): JSX.Element => {
    return <div
      className="rail-add-button"
      onClick={this.onAddNewBuildClick}
    >
      <AddIcon 
        htmlColor="var(--color-text)" 
        fontSize="large"
        className="rail-add-button-icon" 
      />
    </div>
  }
  
  render () {
    return <div className="rail-container">
      {this.renderBuildOptions()}
      {this.renderAddBuildButton()}
    </div>
  }
}