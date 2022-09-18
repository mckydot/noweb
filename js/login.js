function submit() {
	var anText_sub1 = document.getElementById('info1').value;
    var anText_sub2 = document.getElementById('info2').value;

    if(anText_sub1==='kangyeon0405' && anText_sub2==='kangyeon0405*'){
        console.log('로그인 성공');
        location.href = 'main.html';
    }else{
        alert('Username 또는 Password가 잘못되었습니다.')
        console.log('로그인 실패')
    }
}