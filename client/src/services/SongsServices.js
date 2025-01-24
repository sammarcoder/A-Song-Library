import Api from "./Api";
export default  {
getSongs:()=>{
return Api().get('/songs')
},
create(songData) {
    return Api().post('/songPost', songData); // Create a song
},
getById(songId){
    return Api().get(`/songs/${songId}`)
},
deleteById(songId){
    return Api().delete(`songs/${songId}`)
},
updateById(songId, song){
    return Api().put(`songs/${songId}`, song)
},

delAll(){
    Api().delete('/deleteAll')
}
}