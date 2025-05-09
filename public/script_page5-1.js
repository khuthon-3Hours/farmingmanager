document.addEventListener('DOMContentLoaded', () => {
    const guide = document.getElementById('seedGuide');
    const hintModel = 1; //변경 후 new URLSearchParams(window.location.search).get("hintModel");
    const Model = ['a', 'b', 'c', 'd']  
    const text = {
        a: "\n🌱 파종 이전 꿀팁",     //파종
        b: "\n🌱 모종 이전 꿀팁",     //모종
        c: "\n🌱 수확 이전 꿀팁",     //관리
        d: "\n🌱 수확 시 꿀팁"        //수확
    }

    const title = document.createElement('h2');
    title.innerText = text[Model[hintModel]];
    guide.appendChild(title);
  
    const contentBox = document.createElement('div');
    contentBox.style.backgroundColor = "#ffffff";
    contentBox.style.borderRadius = "12px";
    contentBox.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.05)";
    contentBox.style.padding = "1rem";
    contentBox.style.marginTop = "1rem";
    contentBox.style.fontSize = "0.9rem";
    contentBox.style.fontWeight = "bold";
    contentBox.style.width = "85%";
    contentBox.style.maxWidth = "300px";
    contentBox.style.maxHeight = "150px";
    contentBox.style.margin = "0 auto";
    contentBox.style.overflowY = "auto";
  
    const list = document.createElement('ul');
    list.style.paddingLeft = "1.2rem";
  
    const items = {
        a: [
          `곁순은 방울토마토 재배를 마칠 때까지 계속 제거해주어야 합니다. 곁순을 제거하지 않는다면 곁순에서 영양분을 소모하여 전체 형세를 약하게 합니다.`,
          `만약 실수로 원줄기를 잘랐다면 곁순을 원줄기처럼 키워주면 정상 재배가 가능합니다.`
        ],
        b: [
          `정식하기 15일 전에 1평당 토양 살충제 15g, 퇴비 8kg, 석회 330g, 붕사 7g을 뿌리고 땅을 깊게 갈아줍니다.`,
          `그 다음, 밑거름으로 1평당 질소 40g, 인산 27g, 칼리 40g을 뿌린 후 이랑을 만들고 비닐로 멀칭 작업을 해줍니다.`,
          `단어 설명
            - 이랑: 밭에서 볼록하게 나와있는 부분을 말합니다.
            - 멀칭: 농작물을 재배할 때 토양의 표면을 비닐로 덮는 일을 말합니다.`
        ],
        c: [
          `모종 정식 후 3일 내로 지주대를 박아줘야 합니다. 지주대는 줄기를 유인하여 묶어 쓰러지지 않도록 합니다.`,
          `열매가 7단정도 달렸다면 원줄기를 잘라주어야 합니다.  화방 위의 잎 2장을 남기고 잘라줍니다. 이를 적심이라고 하는데, 영양 공급을 효율적으로 하고 통풍을 좋게하여 맛과 품질을 높여줍니다.`,
          `열매가 많이 달리면 토마토도 힘들어합니다. 4화방부터는 50개 정도가 착과될 시 나머지 화방은 제거해주는 편이 좋습니다. 이는 토마토의 생육 상태에 따라 조정될 수 있습니다.`
        ],
        d: [
            `열매를 잡아서 꼭지 바로 위 마디 부분을 위로 꺾어주면 꼭지 마디가 톡 부러지면서 쉽게 딸 수 있습니다.`,
            `꼭지를 직접 떼어 수확 할 시 열매가 금방 상할 수 있습니다.`
        ]
      };
    
      items[Model[hintModel]].forEach(text => {
        const li = document.createElement('li');
        li.innerHTML = text;
        list.appendChild(li);
      });
    
      contentBox.appendChild(list);
      guide.appendChild(contentBox);
  });