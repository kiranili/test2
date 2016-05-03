#pragma strict

function Start () {

}
function OnTriggerEnter(myCollider:Collider){
 if(myCollider.tag=="Player"){
  Application.LoadLevel(Application.loadedLevel);
  }
 }
function Update () {

}

