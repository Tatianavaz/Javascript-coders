/**
 * here we will sum numbers asynchronously
 */

//Basic random func
const random = () => {
    return Promise.resolve(Math.random())
}


const goodAsync = async() => {

    const first = await random();
    const second = await random();
    const third = await random();

    console.log(`Result ${first + second + third}`);

    if (await random()) {
        // do something
    }

    const randos = Promise.all([
        random(),  random(), random()
    ])

    for(const r of await randos) {
        console.log(r)
    }


}


const badAsync = () => {
    
    let first, second, third;
    return random()
        .then(v => { first = v; return random(); })
        .then(v => { second = v; return random(); })
        .then(v => { third = v; return first + second + third })
        .then(v => { console.log(`Result ${v}`) });
}
