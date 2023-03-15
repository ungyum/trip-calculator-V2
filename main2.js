window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check
  };
let checked = window.mobileCheck()
if (checked === true) {
    document.querySelector('body').innerHTML = '경고: 모바일 지원 안합니다 ~~~'
}

window.onload = function() {
const hello = document.querySelector('.hello');
let startBtn = document.querySelector('.start-btn');
// 사용법 버튼 누르면
const howToBtn = document.querySelector('.big-bubble');
howToBtn.onclick = () => {
    hello.style.display = 'flex'
    startBtn.style.display = 'block'
    // hello.innerHTML = `
    // <div class="start-btn">시작하기</div>
    // <div class="curtain"></div>
    // <div class="vessel"><img src="images/vessel.png" alt="" /></div>
    // `
    // let startBtn = document.querySelector('.start-btn');
}

// 시작버튼 누르면
if (startBtn !== null) {
    startBtn.onclick = () => {
        startBtn.style.display = 'none'
        hello.classList.add('active'); // 이거 해줘야 아래 애들에 스타일 적용됨
        imgList = document.querySelectorAll('aside img');
        // 이미지 임시로 숨기기
        for (let i = 0; i < imgList.length; i++) {
            imgList[i].style.display = 'none';
        }
        // hello 레이어 없애기
        setTimeout(() => {
            // hello.innerHTML=''
            hello.style.display = 'none'
            hello.classList.remove('active');
        }, 2000);
        // 내부이미지들 보여주게 한 뒤 클래스명 변경으로 애니메이션 적용
        setTimeout(() => {
            for (let i = 0; i < imgList.length; i++) {
                imgList[i].style.display = 'block'; // 1.3초 뒤 사진 on
            }
            //사용법 버튼 on

            let animList = document.querySelectorAll('.anim'); // 애니메이션 적용받을 것들 선택
            for (let i = 0; i < animList.length; i++) {
                let clstr = animList[i].className
                clstr = clstr.slice(0, 5) + clstr.slice(6)
                animList[i].className = clstr
            } // 애니메이션 on
            setTimeout(() => {
                for (let i = 0; i < animList.length; i++) {
                    let clstr = animList[i].className
                    clstr = clstr.slice(0, 5) + '/' + clstr.slice(5)
                    animList[i].className = clstr
                } // 4초 뒤 애니메이션 off
            }, 4000);
        }, 1300);
    }
}



// 투명부분 뚫고 클릭 + 클릭시 애니메이션
const clickableList = document.querySelectorAll('.anim')
const ctx = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
clickableList.forEach(function(i) {
    let _img = i.childNodes[1]
    _img.addEventListener('click', function(event) {
        let x = event.offsetX
        let y = event.offsetY
        let w = ctx.canvas.width = this.width
        let h = ctx.canvas.height = this.height
        let alpha;
        ctx.drawImage(this, 0, 0, w, h);
        alpha = ctx.getImageData(x, y, 1, 1).data[3]
        if (alpha === 0) {
            this.parentElement.style.pointerEvents = 'none'
            this.parentElement.parentElement.style.pointerEvents = 'none'
            document.elementFromPoint(event.clientX, event.clientY).click()
            this.parentElement.style.pointerEvents = 'auto'
            this.parentElement.parentElement.style.pointerEvents = 'auto'
        } else {
            let clsName = this.parentElement.className
            if (clsName[5] === '/') {
                clsName = clsName.slice(0, 5) + clsName.slice(6)
                this.parentElement.className = clsName
                setTimeout(() => {
                    clsName = clsName.slice(0, 5) + '/' + clsName.slice(5)
                    this.parentElement.className = clsName
                }, 4000);
            }
        }
    })
})


// textarea에 값 넣었나 확인
const textarea = document.querySelector('textarea')
textarea.onkeyup = function() {
    if (textarea.value !== '') {
        document.querySelector('.calc-btn').classList.add('calc-moved')
    } else {
        document.querySelector('.calc-btn').classList.remove('calc-moved')
    }
}

// textarea 엔터키로 전송
textarea.onkeydown = function(e) {
    if (e.keyCode == 13) {
        if (!e.shiftKey) {
            e.preventDefault();
            document.querySelector('.calc-btn').click();
        }
    }
}


// 뒤로가기 버튼
const backBtn = document.getElementById('back-btn')
let calcSceneTimer1;
let calcSceneTimer2;
backBtn.onclick = function() {
    document.querySelector('.calc-scene').classList.remove('active')
    document.querySelector('.calc-scene .won').className = 'won'
    backBtn.style.display = 'none'
    document.querySelector('.reset').style.display = 'none'
    document.querySelector('.reset').innerHTML = `
    <div class="calc-text">총 경비는?</div>
    <div data-splitting-won class="won"></div>
    <div class="additional"></div>
    `
    clearTimeout(calcSceneTimer1)
    clearTimeout(calcSceneTimer2)
}

// 계산하기 버튼 누르기
const calcBtn = document.querySelector('.calc-btn')
calcBtn.onclick = function() {
    document.querySelector('.calc-scene').classList.add('active')
    document.querySelector('.calc-text').style.display = 'inline-block'
    document.querySelector('#back-btn').style.display = 'inline-block'
    document.querySelector('.reset').style.display = 'flex'
    ans = add(); // ans는 스트링
    document.querySelector('.calc-scene .won').innerHTML = ans[0] + '원';
    Splitting({
        target: '[data-splitting-won]'
    })
    calcSceneTimer1 = setTimeout(() => {
        document.querySelector('.won').style.display = 'inline-block'
        let wonTimeout = ans[0].length * 500 + 1000
        calcSceneTimer2 = setTimeout(() => {
            document.querySelector('.won').classList.add('anim-calc-up')
            document.querySelector('.additional').style.display = 'inline-block'
        }, wonTimeout);
    }, 5000);
    if (ans.length === 2) {
        document.querySelector('.calc-scene .additional').innerText = ans[1]
    }
}

// convert()랑 add()에 공통적으로 사용되는 블록
function untilTrimmedArr() {
    let notionText = document.getElementById('input').value
    document.getElementById('input').value = ''
    notionText = notionText.replace(/\*/g,'').replace(/\~/g,'')
    const arr = notionText.split("\n")
    const trimmedArr = arr.map(i => {
        const lastIndexOfArrow = i.lastIndexOf('→')
        const strAfterArrow = i.slice(lastIndexOfArrow + 1)
        let blankRemoved = strAfterArrow.replace(/ /g,'')
        if (blankRemoved.includes('$')) {
            return blankRemoved
        } else {
            blankRemoved = blankRemoved + ' '
            let lastConsecutiveNumIndex = 0
            while (blankRemoved[lastConsecutiveNumIndex + 1] === '0' ||
                blankRemoved[lastConsecutiveNumIndex + 1] === '1' ||
                blankRemoved[lastConsecutiveNumIndex + 1] === '2' ||
                blankRemoved[lastConsecutiveNumIndex + 1] === '3' ||
                blankRemoved[lastConsecutiveNumIndex + 1] === '4' ||
                blankRemoved[lastConsecutiveNumIndex + 1] === '5' ||
                blankRemoved[lastConsecutiveNumIndex + 1] === '6' ||
                blankRemoved[lastConsecutiveNumIndex + 1] === '7' ||
                blankRemoved[lastConsecutiveNumIndex + 1] === '8' ||
                blankRemoved[lastConsecutiveNumIndex + 1] === '9' ||
                blankRemoved[lastConsecutiveNumIndex + 1] === ',' ) {lastConsecutiveNumIndex++;}
            const onlyAJBG = blankRemoved.slice(0, lastConsecutiveNumIndex + 1)
            return onlyAJBG
        }
    })
    return trimmedArr
}

// 자동으로 더해주는 기능 함수, 리턴값으로 ans를 받는다.
function add() {
    const trimmedArr = untilTrimmedArr()
    let onlyNumArr = []
    let elseArr = []
    const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    trimmedArr.forEach(i => {
        if (korean.test(i)) {
            //pass
        } else if (i.includes('$')) {
            elseArr.push(i) // 달러 포함되어있으면 스트링으로 리스트에 담기
        } else {
            onlyNumArr.push(i)
        }
    })
    let finalArr = onlyNumArr.map(i => {
        const aaa = i.replace(/\,/g,'')
        return Number(aaa)
    }) // 숫자형으로 바꿔서 finalArr에 담아주기
    let ans = finalArr.reduce((a, b) => a + b) // 숫자만 남긴 리스트를 다 더하기
    ans = ans.toLocaleString() // 숫자에 콤마 넣어주는 기능
    if (elseArr.length !== 0) {
        const elseArrMapped = elseArr.map(i => ' + ' + i) 
        let elses = elseArrMapped.reduce((a, b) => a + b) //스트링에 더하기기호 추가후 연결
        return [ans, elses]
    } else {
        return [ans]
    }
}


} // onload