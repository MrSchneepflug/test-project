console.log("repository-one");

function test( string ) {
  var emailExpression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

 return emailExpression.test( string );
}
