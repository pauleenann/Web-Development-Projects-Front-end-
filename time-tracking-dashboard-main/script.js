async function getData(){
    try{
        const response = await fetch('data.json')
        const data = await response.json()
        return data
    }catch(err){
        console.error('An error occurred', err.message)
    }
}

async function renderWeeklyData(){
    const data = await getData()
    console.log(data)

    document.getElementById('weekly').style.color="white"
    document.getElementById('daily').style.color="var(--Desaturated-blue)"
    document.getElementById('monthly').style.color="var(--Desaturated-blue)"
    document.getElementById('time-info').innerHTML=''

    data.forEach((element,index)=>{
        let timeBox = document.createElement('div');
        timeBox.classList.add('time-box')
        timeBox.innerHTML=`
        <div>
            <div>
                <p>${element.title}</p>
                <img src="images/icon-ellipsis.svg">
            </div>
            <div>
                <p>${element.timeframes.weekly.current}hrs</p>
                <p>Last week - ${element.timeframes.weekly.previous}hrs</p>
            </div>
        </div>
        `
        document.getElementById('time-info').insertAdjacentElement('beforeend',timeBox)
    })
}

async function renderDailyData(){
    const data = await getData()
    console.log(data)

    document.getElementById('daily').style.color="white"
    document.getElementById('weekly').style.color="var(--Desaturated-blue)"
    document.getElementById('monthly').style.color="var(--Desaturated-blue)"
    document.getElementById('time-info').innerHTML=''

    data.forEach((element,index)=>{
        let timeBox = document.createElement('div');
        timeBox.classList.add('time-box')
        timeBox.innerHTML=`
        <div>
            <div>
                <p>${element.title}</p>
                <img src="images/icon-ellipsis.svg">
            </div>
            <div>
                <p>${element.timeframes.daily.current}hrs</p>
                <p>Yesterday - ${element.timeframes.daily.previous}hrs</p>
            </div>
        </div>
        `
        document.getElementById('time-info').insertAdjacentElement('beforeend',timeBox)
    })
}

async function renderMonthlyData(){
    const data = await getData()
    console.log(data)

    document.getElementById('weekly').style.color="var(--Desaturated-blue)"
    document.getElementById('daily').style.color="var(--Desaturated-blue)"
    document.getElementById('monthly').style.color="var(--White)"
    document.getElementById('time-info').innerHTML=''

    data.forEach((element,index)=>{
        let timeBox = document.createElement('div');
        timeBox.classList.add('time-box')
        timeBox.innerHTML=`
        <div>
            <div>
                <p>${element.title}</p>
                <img src="images/icon-ellipsis.svg">
            </div>
            <div>
                <p>${element.timeframes.monthly.current}hrs</p>
                <p>Last month - ${element.timeframes.monthly.previous}hrs</p>
            </div>
        </div>
        `
        document.getElementById('time-info').insertAdjacentElement('beforeend',timeBox)
    })
}

document.getElementById('weekly').addEventListener('click',()=>{
    renderWeeklyData()
})
document.getElementById('daily').addEventListener('click',()=>{
    renderDailyData()
})
document.getElementById('monthly').addEventListener('click',()=>{
    renderMonthlyData()
})

renderWeeklyData()