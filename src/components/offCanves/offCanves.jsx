import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { getDateFormat } from "../../service/service";
import classes from "./offcanvas.module.css";

const OffCanves = ({ filteredGameDetails, show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton className={classes.heading}>
        <Offcanvas.Title>
          {filteredGameDetails
            ? filteredGameDetails.visitor_team.name
            : "No data"}
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {filteredGameDetails ? (
          <div>
            <div className={classes.filterDetails}>
              <p>Team Full Name:</p>
              <p>{filteredGameDetails.home_team.full_name}</p>
            </div>
            <div className={classes.filterDetails}>
              <p>Total Games in 2021:</p>
              <p>{filteredGameDetails.id}</p>
            </div>

            <h3 className={classes.details}>Random Game Details:</h3>
            <div className={classes.container}>
              <div className={classes.filterDetails}>
                <h5>Date</h5>
                <h6>{getDateFormat(filteredGameDetails.date)}</h6>
              </div>
              <div className={classes.filterDetails}>
                <h5>Home Team:</h5>
                <h6>{filteredGameDetails.visitor_team.name}</h6>
              </div>
              <div className={classes.filterDetails}>
                <h5>Home Team Score:</h5>
                <h6>{filteredGameDetails.home_team_score}</h6>
              </div>
              <div className={classes.filterDetails}>
                <h5>Visitor Team:</h5>
                <h6>{filteredGameDetails.home_team.name}</h6>
              </div>
              <div className={classes.filterDetails}>
                <h5>Visitor Team Score:</h5>
                <h6>{filteredGameDetails.visitor_team_score}</h6>
              </div>
            </div>
          </div>
        ) : (
          <p>No data found</p>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default React.memo(OffCanves);
