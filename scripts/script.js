var option1 = document.getElementById( "Option1" );
var option2 = document.getElementById( "Option2" );
var option3 = document.getElementById( "Option3" );

var option4 = document.getElementById( "Option4" );
var option5 = document.getElementById( "Option5" );
var option6 = document.getElementById( "Option6" );

var option7 = document.getElementById( "Option7" );
var option8 = document.getElementById( "Option8" );
var option9 = document.getElementById( "Option9" );

var option10 = document.getElementById( "Option10" );
var option11 = document.getElementById( "Option11" );
var option12 = document.getElementById( "Option12" );

var decideButtonEl = document.getElementById( "decideButton" );

var notDecidedEl = document.getElementById( "notDecided" );
var hasDecidedEl = document.getElementById( "hasDecided" );

var decisionEl = document.getElementById( "decision" );

var restartButtonEl = document.getElementById( "restartButton" );

var list = [ option1, option2, option3, option4, option5, option6, option7, option8, option9, option10, option11, option12 ];


decideButtonEl.addEventListener( "click", randomize );
restartButtonEl.addEventListener( "click", restart );


function randomize()
{

  var total = 0;

  for ( var i = 0; i < list.length; i++ )
  {
    if ( list[ i ].value != "" )
    {
      total += 1;
    }
  }

  var rand = Math.floor( Math.random() * total ) + 1;

  if ( rand === 1 )
  {
    console.log( option1.value );
    decisionEl.innerHTML = option1.value;
  }
  else if ( rand === 2 )
  {
    console.log( option2.value );
    decisionEl.innerHTML = option2.value;
  }
  else if ( rand === 3 )
  {
    console.log( option3.value );
    decisionEl.innerHTML = option3.value;
  }
  else if ( rand === 4 )
  {
    console.log( option4.value );
    decisionEl.innerHTML = option4.value;
  }
  else if ( rand === 5 )
  {
    console.log( option5.value );
    decisionEl.innerHTML = option5.value;
  }
  else if ( rand === 6 )
  {
    console.log( option6.value );
    decisionEl.innerHTML = option6.value;
  }
  else if ( rand === 7 )
  {
    console.log( option7.value );
    decisionEl.innerHTML = option7.value;
  }
  else if ( rand === 8 )
  {
    console.log( option8.value );
    decisionEl.innerHTML = option8.value;
  }
  else if ( rand === 9 )
  {
    console.log( option9.value );
    decisionEl.innerHTML = option9.value;
  }
  else if ( rand === 10 )
  {
    console.log( option10.value );
    decisionEl.innerHTML = option10.value;
  }
  else if ( rand === 11 )
  {
    console.log( option11.value );
    decisionEl.innerHTML = option1.value;
  }
  else if ( rand === 12 )
  {
    console.log( option12.value );
    decisionEl.innerHTML = option12.value;
  }

  notDecidedEl.style.display = "none";
  hasDecidedEl.style.display = "block";

}


function restart()
{

  for ( var i = 0; i < list.length; i++ )
  {
    list[ i ].value = "";
  }

  hasDecidedEl.style.display = "none";
  notDecidedEl.style.display = "block";
}