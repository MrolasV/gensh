import React from "react";
import '../builds.scss';
import { Build } from "../interfaces";
import { TextField, Button } from "@material-ui/core";

interface MetaPanelProps {
  build: Build;
  updateBuild: (build: Build) => void;
  removeBuild: () => void;
  duplicateBuild: () => void;
}

export default class MetaPanel extends React.Component<MetaPanelProps,{}> {
  onLabelChange = (e: any) => {
    const { build, updateBuild } = this.props;
    const value = e.target.value;
    build.label = value;
    updateBuild(build);
  }

  render () {
    return <div className="editor-meta-panel">
      <div className="editor-meta-panel-label">
        <TextField
          size="small"
          variant="outlined"
          label="Label"
          placeholder="Label"
          value={this.props.build.label}
          className="editor-meta-panel-label-field"
          InputProps={{
            classes: {
              input: 'textfield-input'
            }
          }}
          InputLabelProps={{
            shrink: true
          }}
          onChange={this.onLabelChange}
        />
      </div>
      <div className="editor-meta-panel-action">
        <Button
          variant="outlined"
          className="editor-meta-panel-action-button"
          onClick={this.props.removeBuild}
        >
          {'Remove'}
        </Button>
      </div>
      <div className="editor-meta-panel-action">
        <Button
          variant="outlined"
          className="editor-meta-panel-action-button"
          onClick={this.props.duplicateBuild}
        >
          {'Duplicate'}
        </Button>
      </div>
    </div>
  }
}