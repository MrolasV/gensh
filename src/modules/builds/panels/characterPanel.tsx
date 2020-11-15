import React from "react";
import { Select, MenuItem, InputLabel, TextField, TableContainer, Table, TableBody, TableRow, TableCell } from "@material-ui/core";
import { Build } from "../interfaces";
import { characters } from "data/characters";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { getAscensionLevelRange } from "data/characterUtil";
import { Character } from "data/characterHandlers/character";
import { Stat } from "data/stats";

interface CharacterPanelProps {
  build: Build;
  updateBuild: (build: Build) => void;
}

interface CharacterPanelState {
  character?: Character;
}

export default class CharacterPanel extends React.Component<CharacterPanelProps, CharacterPanelState> {
  componentDidMount () {
    this.setCharacter();
  }

  componentDidUpdate (prevProps: CharacterPanelProps) {
    if (this.props.build.characterId !== prevProps.build.characterId) {
      this.setCharacter();
    }
  }

  setCharacter = () => {
    this.setState({
      character: characters.get(this.props.build.characterId),
    });
  }

  getCharacterOptions = (): JSX.Element[] => {
    return Array.from(characters).map(([characterId, character]) => {
      return <MenuItem value={characterId} key={characterId}>
        <img
          draggable={false}
          src={character.icon()}
          alt={character.characterId()}
          className="select-icon"
        />
      </MenuItem>
    });
  }

  onCharacterSelect = (e: any) => {
    const { build, updateBuild } = this.props;
    const value = e.target.value;
    build.characterId = value;
    updateBuild(build);
  }
  
  renderCharacterSelection = (): JSX.Element => {
    return <div className="select-container">
      <InputLabel id="character-select">Character</InputLabel>
      <Select
        variant="outlined"
        value={this.props.build.characterId}
        labelId="character-select"
        onChange={this.onCharacterSelect}
      >
        {this.getCharacterOptions()}
      </Select>
    </div>
  }

  renderCharacterName = (): JSX.Element => {
    const { build } = this.props;
    const name = (build.characterId.charAt(0).toUpperCase() + build.characterId.slice(1)).replace(/_/g, ' ');
    return <div className="character-name">
      {name}
    </div>
  }

  changeAscension = (star: number) => {
    const { build, updateBuild } = this.props;
    const rank = star === build.characterAscension ? star - 1 : star;
    const savedRank = build.characterAscension;
    build.characterAscension = rank;
    const levelRange = getAscensionLevelRange(rank);
    if (savedRank < rank) {
      if (build.characterLevel < levelRange.min) {
        build.characterLevel = levelRange.min;
      }
    } else {
      if (build.characterLevel > levelRange.max) {
        build.characterLevel = levelRange.max;
      }
    }
    updateBuild(build);
  }
  
  renderAscension = (): JSX.Element => {
    const { build } = this.props;
    const stars: JSX.Element[] = [];
    for (let i = 0; i < 6; i++) {
      const index = i;
      stars.push(
        <div
          key={index}
          className="character-ascension-star"
          onClick={() => this.changeAscension(index + 1)}
        >
          {index < build.characterAscension ?
            <StarIcon/> :
            <StarBorderIcon/>
          }
        </div>
      );
    }
    return <div className="character-ascension-container">
      {stars}
    </div>
  }

  changeLevel = (e: any) => {
    const { build, updateBuild } = this.props;
    const level = Math.max(1, Math.min(90, e.target.value as number));
    const savedLevel = build.characterLevel;
    build.characterLevel = level;
    if (!getAscensionLevelRange(build.characterAscension).contains(level)) {
      if (savedLevel < level) {
        for (let i = build.characterAscension + 1; i <= 6; i++) {
          if (getAscensionLevelRange(i).contains(level)) {
            build.characterAscension = i;
            break;
          }
        }
      } else {
        for (let i = build.characterAscension - 1; i >= 0; i--) {
          if (getAscensionLevelRange(i).contains(level)) {
            build.characterAscension = i;
            break;
          }
        }
      }
    }
    updateBuild(build);
  }

  renderLevel = (): JSX.Element => {
    return <div className="character-level-container">
      <TextField
        size="small"
        variant="outlined"
        label="Level"
        type="number"
        value={this.props.build.characterLevel}
        InputProps={{
          classes: {
            input: 'textfield-input'
          }
        }}
        InputLabelProps={{
          shrink: true
        }}
        onChange={this.changeLevel}
      />
    </div>
  }

  getStatRow = (stat: Stat, value: number | undefined, maxDecimals?: number): JSX.Element => {
    const multiplier = Math.pow(10, maxDecimals || 0);
    const displayVal = Math.round((value || 0) * multiplier) / multiplier;
    return <TableRow key={stat}>
      <TableCell 
        align="left" 
        component="th" 
        scope="row"
        classes={{
          body: 'tablecell-body'
        }}
      >{stat}</TableCell>
      <TableCell 
        align="right"
        classes={{
          body: 'tablecell-body'
        }}
      >{displayVal}</TableCell>
    </TableRow>
  }

  renderStats = (): JSX.Element => {
    const { build } = this.props;
    if (!this.state) {
      return <div/>
    }
    const { character } = this.state;
    if (!character) {
      return <div/>
    }
    const stats = character.getStatsAtLevel(build.characterLevel, build.characterAscension);
    if (!stats) {
      return <div/>
    }

    const rows: JSX.Element[] = [];
    rows.push(this.getStatRow(Stat.HEALTH, stats.get(Stat.HEALTH)));
    rows.push(this.getStatRow(Stat.ATTACK, stats.get(Stat.ATTACK)));
    rows.push(this.getStatRow(Stat.DEFENSE, stats.get(Stat.DEFENSE)));
    const otherStat = Array.from(stats).find(([ key, value ]) => {
      return key !== Stat.HEALTH && key !== Stat.ATTACK && key !== Stat.DEFENSE;
    });
    if (otherStat) {
      rows.push(this.getStatRow(otherStat[0], otherStat[1], 1));
    }

    return <div className="character-stats-container">
      <div className="character-stats-header">
        Base stats
      </div>
      <TableContainer>
        <Table size="small" >
          <TableBody>
            {rows}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  }
  
  render () {
    return <div className="editor-character-panel">
      <div className="character-input">
        {this.renderCharacterSelection()}
        <div className="character-right">
          {this.renderCharacterName()}
          {this.renderAscension()}
          {this.renderLevel()}
        </div>
      </div>
      {this.renderStats()}
    </div>
  }
}