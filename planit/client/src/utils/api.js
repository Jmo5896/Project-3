import axios from "axios";

export default {

getAllUserPlans: function(id){
    return axios.get("/api/planit/plan/"+ id + "/all" )
},

getPlanByID: function(id){
    return axios.get("/api/planit/plan/" + id)
},

postPlan: function(GearData){
    return axios.post("/api/planit/plan/", GearData)
},

// deletePlan: function(id){
//     return axios.put("/api/planit" + id)
    
// },
    
}
