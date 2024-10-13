$(document).ready(function() {
    

    function test1(a1, a2,a3) {
                 var idxDiv = $('<div class="idx"></div>');
             
             // title1 div 생성
             var title1Div = $('<div class="title1"></div>');
             var bNameDiv = $('<div class="b_name"></div>');
             var b1Div = $('<div class="b1"></div>');
             
             // title1 div에 b_name과 b1 추가
             title1Div.append(bNameDiv);
             title1Div.append(b1Div);
             
             // mainbox div 생성
             var mainboxDiv = $('<div class="mainbox"></div>');
             var ul = $('<ul></ul>');
             
             // mainbox div에 ul 추가
             mainboxDiv.append(ul);
             
             // idx div에 title1과 mainbox 추가
             idxDiv.append(title1Div);
             idxDiv.append(mainboxDiv);
             
             // idx div를 body에 추가
             $(a1).prepend(idxDiv);
             $(".b_name").text(a3);
 
         $(a1+" "+ a2).each(function(index) {
             $(this).attr("id", "sec" + (index + 1));
         });
 
  
 
         $(a2).each(function(idx) {  
                 let content = $(this).html(); 
                 let verification = content === "티스토리툴바" || content === "단축키" || content ==="내 블로그" || content =="블로그 게시글" || content =="모든 영역" 
                 || content === "&nbsp;"   || content.includes("카테고리의") === true
 
                 // 만약 content가 '333'이라면 추가하지 않음
                 if (verification) {
                     return; // 현재 반복을 건너뜁니다.
                 }
 
                 let tag1 = $("<li>"); // li 요소 생성
                 let newLink = $("<a>").attr("href", "sec" + (idx + 1)).text(content); // 링크 텍스트 설정
                 tag1.append(newLink); // li에 링크 추가
                 $(".mainbox > ul").append(tag1); // ul에 li 추가
 });
 
 
         $(".mainbox a").on("click", function(event) {
             event.preventDefault(); // 기본 동작 방지
             let target = $(this).attr("href"); // 클릭한 링크의 href 값
             $('html, body').animate({
                 scrollTop: $("#" + target).offset().top // 해당 ID로 부드럽게 이동
             }, 500);
         });
     }
    console.log("script connect");
     //(목차ui를 넣은 곧 값,제목이되는 태그,블로그이름)
 });
