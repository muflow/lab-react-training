const SignupPage = props =>
<div className="col-md-6 col-lg-3">
 <div className="card mb-3">
 <div className="card-body">
 <p className="card-title">
 {props.info.email}
 </p>
 <p className="card-text">
 {props.info.password}
 </p>
 <p className="card-text">
 {props.info.nationality}
 </p>
 </div>
 </div>
</div>;

export default SignupPage;