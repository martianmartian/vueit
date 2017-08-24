

var All = {
    template: 
    `
        <div>haah</div>

    `,
    props: ['a'],
    created:function(){
        console.log(this)
    }
    // data:function(){
    //     return {
    //         thearray:function(){
    //             axios.get(`data/thearray.json`)
    //             .then(res => {
    //                 return res.data.thearray
    //                 // mainApp.thearray=res.data.thearray
    //             }).catch(e=>{this.errors.push(e)})
    //         },
    //         wtf:"fck"
    //     }
    // }
}

