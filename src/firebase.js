//firebase
import VueFire from 'vuefire'
import Firebase from 'firebase'

var db = Firebase.initializeApp({
  databaseURL: 'https://progamelobbies.firebaseio.com'
}).database();
var lobbiesRef = db.ref('lobbies');

export default lobbiesRef;