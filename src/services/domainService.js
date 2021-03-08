import axios from "../utils/axios";

export function createDomain(credentials){
  return new Promise(function(resolve, reject) {
        axios
          .post("/create_domain", credentials)
          .then((response) => {
             if(response.status === 200){
               resolve(response.data)
             }
             reject(response.data)
          })
          .catch((err) => {
            reject(err)
          })
  });
}

export function getDomains(credentials){
  return new Promise(function(resolve, reject) {
        axios
          .get("/get_domains", credentials)
          .then((response) => {
             if(response.status === 200){
               resolve(response.data)
             }
             reject(response.data)
          })
          .catch((err) => {
            reject(err)
          })
  });
}
