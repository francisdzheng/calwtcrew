import React, { Component } from 'react';

import './Roster.css';

export default class Roster extends Component {
  render () {
    return (
      <div className="box">
        <header>
          <h1>{this.props.rostername}</h1>
        </header>
        <div className="namelist">
          <div className="name">
             {this.props.names[0]}
          </div>
          <div className="name">
             {this.props.names[1]}
          </div>
          <div className="name">
             {this.props.names[2]}
          </div>
          <div className="name">
             {this.props.names[3]}
          </div>
          <div className="name">
             {this.props.names[4]}
          </div>
          <div className="name">
             {this.props.names[5]}
          </div>
          <div className="name">
             {this.props.names[6]}
          </div>
          <div className="name">
             {this.props.names[7]}
          </div>
          <div className="name">
             {this.props.names[8]}
          </div>
          <div className="name">
             {this.props.names[9]}
          </div>
          <div className="name">
             {this.props.names[10]}
          </div>
          <div className="name">
             {this.props.names[11]}
          </div>
          <div className="name">
             {this.props.names[12]}
          </div>
          <div className="name">
             {this.props.names[13]}
          </div>
          <div className="name">
             {this.props.names[14]}
          </div>
          <div className="name">
             {this.props.names[15]}
          </div>
          <div className="name">
             {this.props.names[16]}
          </div>
          <div className="name">
             {this.props.names[17]}
          </div>
          <div className="name">
             {this.props.names[18]}
          </div>
          <div className="name">
             {this.props.names[19]}
          </div>
          <div className="name">
             {this.props.names[20]}
          </div>
        </div>
        <div className="sidelist">
          <div className="side">
             {this.props.sides[0]}
          </div>
          <div className="side">
             {this.props.sides[1]}
          </div>
          <div className="side">
             {this.props.sides[2]}
          </div>
          <div className="side">
             {this.props.sides[3]}
          </div>
          <div className="side">
             {this.props.sides[4]}
          </div>
          <div className="side">
             {this.props.sides[5]}
          </div>
          <div className="side">
             {this.props.sides[6]}
          </div>
          <div className="side">
             {this.props.sides[7]}
          </div>
          <div className="side">
             {this.props.sides[8]}
          </div>
          <div className="side">
             {this.props.sides[9]}
          </div>
          <div className="side">
             {this.props.sides[10]}
          </div>
          <div className="side">
             {this.props.sides[11]}
          </div>
          <div className="side">
             {this.props.sides[12]}
          </div>
          <div className="side">
             {this.props.sides[13]}
          </div>
          <div className="side">
             {this.props.sides[14]}
          </div>
          <div className="side">
             {this.props.sides[15]}
          </div>
          <div className="side">
             {this.props.sides[16]}
          </div>
          <div className="side">
             {this.props.sides[17]}
          </div>
          <div className="side">
             {this.props.sides[18]}
          </div>
          <div className="side">
             {this.props.sides[19]}
          </div>
          <div className="side">
             {this.props.sides[20]}
          </div>
        </div>
        <div className="yearlist">
          <div className="year">
             {this.props.years[0]}
          </div>
          <div className="year">
             {this.props.years[1]}
          </div>
          <div className="year">
             {this.props.years[2]}
          </div>
          <div className="year">
             {this.props.years[3]}
          </div>
          <div className="year">
             {this.props.years[4]}
          </div>
          <div className="year">
             {this.props.years[5]}
          </div>
          <div className="year">
             {this.props.years[6]}
          </div>
          <div className="year">
             {this.props.years[7]}
          </div>
          <div className="year">
             {this.props.years[8]}
          </div>
          <div className="year">
             {this.props.years[9]}
          </div>
          <div className="year">
             {this.props.years[10]}
          </div>
          <div className="year">
             {this.props.years[11]}
          </div>
          <div className="year">
             {this.props.years[12]}
          </div>
          <div className="year">
             {this.props.years[13]}
          </div>
          <div className="year">
             {this.props.years[14]}
          </div>
          <div className="year">
             {this.props.years[15]}
          </div>
          <div className="year">
             {this.props.years[16]}
          </div>
          <div className="year">
             {this.props.years[17]}
          </div>
          <div className="year">
             {this.props.years[18]}
          </div>
          <div className="year">
             {this.props.years[19]}
          </div>
          <div className="year">
             {this.props.years[20]}
          </div>
        </div>
        <div className="hometownlist">
          <div className="hometown">
             {this.props.hometowns[0]}
          </div>
          <div className="hometown">
             {this.props.hometowns[1]}
          </div>
          <div className="hometown">
             {this.props.hometowns[2]}
          </div>
          <div className="hometown">
             {this.props.hometowns[3]}
          </div>
          <div className="hometown">
             {this.props.hometowns[4]}
          </div>
          <div className="hometown">
             {this.props.hometowns[5]}
          </div>
          <div className="hometown">
             {this.props.hometowns[6]}
          </div>
          <div className="hometown">
             {this.props.hometowns[7]}
          </div>
          <div className="hometown">
             {this.props.hometowns[8]}
          </div>
          <div className="hometown">
             {this.props.hometowns[9]}
          </div>
          <div className="hometown">
             {this.props.hometowns[10]}
          </div>
          <div className="hometown">
             {this.props.hometowns[11]}
          </div>
          <div className="hometown">
             {this.props.hometowns[12]}
          </div>
          <div className="hometown">
             {this.props.hometowns[13]}
          </div>
          <div className="hometown">
             {this.props.hometowns[14]}
          </div>
          <div className="hometown">
             {this.props.hometowns[15]}
          </div>
          <div className="hometown">
             {this.props.hometowns[16]}
          </div>
          <div className="hometown">
             {this.props.hometowns[17]}
          </div>
          <div className="hometown">
             {this.props.hometowns[18]}
          </div>
          <div className="hometown">
             {this.props.hometowns[19]}
          </div>
          <div className="hometown">
             {this.props.hometowns[20]}
          </div>
        </div>
        <div className="majorlist">
          <div className="major">
             {this.props.majors[0]}
          </div>
          <div className="major">
             {this.props.majors[1]}
          </div>
          <div className="major">
             {this.props.majors[2]}
          </div>
          <div className="major">
             {this.props.majors[3]}
          </div>
          <div className="major">
             {this.props.majors[4]}
          </div>
          <div className="major">
             {this.props.majors[5]}
          </div>
          <div className="major">
             {this.props.majors[6]}
          </div>
          <div className="major">
             {this.props.majors[7]}
          </div>
          <div className="major">
             {this.props.majors[8]}
          </div>
          <div className="major">
             {this.props.majors[9]}
          </div>
          <div className="major">
             {this.props.majors[10]}
          </div>
          <div className="major">
             {this.props.majors[11]}
          </div>
          <div className="major">
             {this.props.majors[12]}
          </div>
          <div className="major">
             {this.props.majors[13]}
          </div>
          <div className="major">
             {this.props.majors[14]}
          </div>
          <div className="major">
             {this.props.majors[15]}
          </div>
          <div className="major">
             {this.props.majors[16]}
          </div>
          <div className="major">
             {this.props.majors[17]}
          </div>
          <div className="major">
             {this.props.majors[18]}
          </div>
          <div className="major">
             {this.props.majors[19]}
          </div>
          <div className="major">
             {this.props.majors[20]}
          </div>
        </div>
      </div>
    );
  }
}
