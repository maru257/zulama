const shareButton = document.querySelector(".share_btn");
const openButton = document.querySelector(".modal_btn");
const closeButton = document.querySelector(".close_btn");
const startButton = document.querySelector(".start_btn");

const result = document.querySelector(".result");
const modal = document.querySelector("#modal");
const loading = document.querySelector(".result_loading");



// add: 추가, event: 현상, 일, 사건, listener: 듣는 사람, 듣는 코드
// addEventListener: 추가적인 사건을 듣는 코드

// shareButton에서 addEventListener를 실행 한다.
// (("event, 사건"), 앞의 사건이 일어났을 때 코드가 실행하는 명령)

function calculator(){ // 명령어 calculator
    const nameValue = document.querySelector("#name_value"); // nameValue라는 변수는 calculator 명령어 안에서만 사용한다.
    let yearValue = document.querySelector("#year_value");
    let yearValue_int = Number(yearValue.value);

    const nameResult = document.querySelector(".name_result");
    const yearResult = document.querySelector(".year_result");

    if(nameValue.value == ""){
        alert('이름이 입력되지 않았습니다.');
        return false; // false: 거짓. true: 참
    }
    else if(yearValue.value == ""){
        alert('년도가 입력되지 않았습니다.');
        return false; // false: 거짓. true: 참
    }
    else if(yearValue_int > 2023){
        alert('잘못된 값입니다.');
        return false; // false: 거짓. true: 참
    }

    result.style.display = "none";
    loading.style.display = "flex";
    
    setTimeout(function(){ // 계산 기능 포함
        loading.style.display = "none";
        result.style.display = "flex";
        nameResult.innerText = nameValue.value;
        if(yearValue_int%12 == 0){yearResult.innerText = '원숭이띠';} // 태어난 해를 12로 나눴을 때 나머지가 0이면 원숭이의 해
        else if(yearValue_int%12 == 1){yearResult.innerText = '닭띠';}
        else if(yearValue_int%12 == 2){yearResult.innerText = '개띠';}
        else if(yearValue_int%12 == 3){yearResult.innerText = '돼지띠';}
        else if(yearValue_int%12 == 4){yearResult.innerText = '쥐띠';}
        else if(yearValue_int%12 == 5){yearResult.innerText = '소띠';}
        else if(yearValue_int%12 == 6){yearResult.innerText = '호랑이띠';}
        else if(yearValue_int%12 == 7){yearResult.innerText = '토끼띠';}
        else if(yearValue_int%12 == 8){yearResult.innerText = '강한용띠';}
        else if(yearValue_int%12 == 9){yearResult.innerText = '뱀띠';}
        else if(yearValue_int%12 == 10){yearResult.innerText = '말띠';}
        else if(yearValue_int%12 == 11){yearResult.innerText = '양띠';}
        // 뱀 원숭이 말 양 12가지 동물
        // 돼지 닭 개 쥐 소 호랑이 토끼 용 뱀
    }, 1000); // 1초
}
function openModal(){ 
    modal.style.display = "flex";
}

function closeModal(){ 
    modal.style.display = "none";
}



window.onclick = function (event) {
    if(event.target == modal) {
        closeModal();
    }
};

function copyUrl() {
    let url = window.location.href;
    let tmp = document.createElement('input');
    
    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
	document.execCommand("copy");
    document.body.removeChild(tmp);
    
	alert("URL이 복사되었습니다"); 
}



shareButton.addEventListener("click", copyUrl); 
openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
startButton.addEventListener("click", calculator); 