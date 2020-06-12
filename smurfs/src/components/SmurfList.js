import React, { useEffect } from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import { getData } from "../actions/actions";

const SmurfList = (props) => {
  useEffect(() => {
    props.getData();
  }, []);

  console.log("props.smurfs --->", props.smurfs);

  return (
    <>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.smurfs.map((smurf) => {
          return <Smurf key={smurf.id} smurf={smurf} />;
        })
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getData })(SmurfList);
