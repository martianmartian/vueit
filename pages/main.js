

var mockdata={
        'thearray':[
        {   
            'tid':'getting it',
            'tname': 'getting it',
            'imgurl':'',
            'cnames':[
                  {"id": 0, name: 'getting it' },
                ]
        }
    ]
}

var mainApp = new Vue({
    el:'#main-app',
    data:mockdata,
    router:router,
    created:function(){

        // axios.get(`data/thearray.json`)
        //     .then(res => {
        //         mainApp.thearray=res.data.thearray
        //     }).catch(e=>{this.errors.push(e)})
    },
    methods:{
        gosingle:function(tid){
            console.log(tid)
        }
    }
})