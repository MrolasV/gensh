import React from "react";
import './builds.scss';
import { Build } from "./interfaces";
import MetaPanel from "./panels/metaPanel";
import CharacterPanel from "./panels/characterPanel";

interface BuildEditorProps {
  build: Build;
  updateBuild: (build: Build) => void;
  removeBuild: () => void;
  duplicateBuild: () => void;
}

export default class BuildEditor extends React.Component<BuildEditorProps, {}> {  
  renderWeaponPanel = (): JSX.Element => {
    return <div className="editor-weapon-panel">

    </div>
  }
  
  renderArtifactPanel = (): JSX.Element => {
    return <div className="editor-artifact-panel">

    </div>
  }
  
  render () {
    const {
      build,
      updateBuild,
      removeBuild,
      duplicateBuild,
    } = this.props;
    return <div className="editor-container">
      <MetaPanel
        build={build}
        updateBuild={updateBuild}
        removeBuild={removeBuild}
        duplicateBuild={duplicateBuild}
      />
      <div className="editor-data-panel">
        <div className="editor-left-panel">
          <CharacterPanel
            build={build}
            updateBuild={updateBuild}
          />
          {this.renderWeaponPanel()}
        </div>
        {this.renderArtifactPanel()}
      </div>
    </div>
  }
}