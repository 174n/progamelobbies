# progamelobbies
Web app that helps players to find people to play in teams

DEMO: http://alexandrov.online/progamelobbies/

## Firebase rules

```json
{
  "rules": {
    ".read": "true",
    ".write": "false",
    "lobbies": {
      "$n1":{
        "lobbies":{
          "$n2":{
            "lobbies":{
              "$n3":{
                ".write": "true",
                ".validate": "newData.hasChildren(['time', 'url', 'tags'])",
                "time":{
                  ".validate": "newData.val() == now"
                },
                "url":{
                  ".validate": "newData.val().matches(/^steam:\\/\\/joinlobby\\/[0-9]{2,5}\\/[0-9]{10,20}\\/[0-9]{10,20}$/)"
                },
                "tags":{
                  "$n4":{
                    ".validate": "newData.val() >= 0 && newData.val() <= 10"
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```
