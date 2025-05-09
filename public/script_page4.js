document.addEventListener('DOMContentLoaded', () => {
    const hintPage = document.getElementById('hintPage');
    const hint = new URLSearchParams(window.location.search).get("hint");
    const Hint = ['support', 'cut', 'cut2', 'harvest']  
    const youtubeUrl = {
      support:"https://www.youtube.com/watch?v=DoTRWplEdxg",    //지지대 설치
      cut: "https://www.youtube.com/watch?v=HIcHx24OSDw",       //곁순 제거
      cut2: "https://www.youtube.com/watch?v=Jf4ZdFwNnwM",      //적심
      harvest: "https://www.youtube.com/watch?v=jJTH5qbsces"    //수확
    }
    
  
    function extractYoutubeID(url) {
      const regExp = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&\n?#]+)/;
      const match = url.match(regExp);
      return match ? match[1] : null;
    }
  
    const videoId = extractYoutubeID(youtubeUrl[Hint[hint]]);
  
    if (videoId) {
      const videoFrame = document.createElement('iframe');
      videoFrame.width = "100%";
      videoFrame.height = "220"; 
      videoFrame.style.marginTop = "50px";
      videoFrame.style.marginBottom = "10px";
      videoFrame.style.borderRadius = "12px";
      videoFrame.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";

      videoFrame.src = `https://www.youtube.com/embed/${videoId}`;
      videoFrame.frameBorder = "0";
      videoFrame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      videoFrame.allowFullscreen = true;
  
      hintPage.appendChild(videoFrame);
    } else {
      const errorMsg = document.createElement('p');
      errorMsg.innerText = "유효하지 않은 YouTube 링크입니다.";
      hintPage.appendChild(errorMsg);
    }
  
    const commentText = {
      support:`
      방울 토마토 지주대 설치 영상입니다.

       -일자 말뚝모양으로 설치하는 것 보다 ㅅ자 형태가 되게 설치하는 것이 더 좋습니다.

       -길이는 환경에 따라 다르지만, 180cm정도가 가장 적합합니다.

       -방울 토마토 지주대를 설치할 때, 방울 토마토 줄기가 지주대를 타고 올라가게 하기 위해서 줄기를 지주대에 묶어줘야 합니다.
    `,
      cut: `
      방울 토마토 곁순 제거 영상입니다.

       -곁순은 방울토마토 재배를 마칠 때까지 계속 제거해주어야 합니다. 곁순을 제거하지 않는다면 곁순에서 영양분을 소모하여 전체 형세를 약하게 합니다.

       -주로 방울 토마토 줄기 사이 사이에 곁순이 자랍니다.

       -만약 실수로 원줄기를 잘라도 곁순을 원줄기처럼 키워주면 정상 재배가 가능합니다.
      `,
      cut2: `
      방울 토마토 적심 영상입니다.

       -얼마나 키울지에 따라 다르지만, 일반적으로 열매가 7단 이상 자라기 전에 원줄기를 잘라줘야 합니다.

       -화방 위의 잎 2장을 남기고 잘라주는데 이를 적심이라고 합니다. 영양 공급을 효율적으로 하고 통풍을 좋게 하여 맛과 품질을 높여줍니다.
      `,
      harvest:`
      방울 토마토 수확 영상입니다.

       -수확은 일반적으로 7화방에 꽃이 피었을 때, 1화방부터 수확이 가능합니다.

       -꼭지를 떼어내어 수확 할 시 열매가 금방 상할 수 있습니다.

       -열매를 잡아서 꼭지 바로 위 마디 부분을 위로 꺾어주면 꼭지 마디가 톡 부러지면서 쉽게 딸 수 있습니다.
      `
    }
  
    const commentBox = document.createElement('div');
    commentBox.className = "comment-box";
    commentBox.style.marginTop = "1rem";
    commentBox.style.padding = "1rem";
    commentBox.style.borderTop = "1px solid #ccc";
    commentBox.style.fontSize = "0.8rem";
    commentBox.style.fontWeight = "bold"; 
    commentBox.style.backgroundColor = "#ffffff";
    commentBox.style.borderRadius = "12px";        // 둥근 테두리
    commentBox.style.color = "#333";
    commentBox.style.whiteSpace = "pre-line";
    commentBox.style.width = "85%";
    commentBox.style.maxWidth = "300px";
    commentBox.style.maxHeight = "200px";
    commentBox.style.overflowY = "auto";
    commentBox.style.margin = "0 auto";

    commentBox.innerText = commentText[Hint[hint]].trim();
    hintPage.appendChild(commentBox);
  });
  