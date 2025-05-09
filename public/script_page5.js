document.addEventListener('DOMContentLoaded', () => {
  const guide = document.getElementById('seedGuide');
  const hintModel = 1; //변경 후 new URLSearchParams(window.location.search).get("hintModel");
  const Model = ['a', 'b', 'c', 'd']  
  const text = {
    a: "\n🌱 파종 이전 필수 진행 사항",     //파종
    b: "\n🌱 모종 이전 필수 진행 사항",     //모종
    c: "\n🌱 수확 이전 필수 진행 사항",     //관리
    d: "\n🌱 수확 시 주의 사항"            //수확
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
  contentBox.style.maxHeight = "100px";
  contentBox.style.margin = "0 auto";

  const list = document.createElement('ul');
  list.style.paddingLeft = "1.2rem";

  const items = {
    a: [
      `"<a href='page4.html?hint=0'>지주대 설치</a>"`,
      `"<a href='page4.html?hint=1'>곁순 제거하기</a>"`
    ],
    b: [
      `"<a href='page4.html?hint=1'>곁순 제거하기</a>"`
    ],
    c: [
      `"<a href='page4.html?hint=1'>곁순 제거하기</a>"`
    ],
    d: [
      ``
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