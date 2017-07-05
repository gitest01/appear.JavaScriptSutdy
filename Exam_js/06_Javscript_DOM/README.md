# DOM (Document Object Model)
DOM : document를 객체로 구현했다고 생각하면 됩니다.
```js
// 계층적 구조
html
-head
--title
--meta
--link
-body
--header#header
---nav
---div
--main
--footer
---"hello"
--script
```
```js
// DOM
{
  document: {
    html: {
      head: {
        title: ...
      },
      body: {
        header: ...
      }
    }
  }
}
```
### Document
document는 html에 관한 것들을 담당하는 객체이니만큼 대부분의 것들이 태그를 선택하고 조작하는 데 사용됩니다
### document.getElementById(아이디)
html에서 해당 아이디를 가진 태그를 선택합니다.
```js
document.getElementById('root'); 
```
클래스, 이름, 태그    
html에서 각각 해당 클래스, 네임, 태그명을 가진 태그를 선택합니다. 여러개 선택되기 때문에 항상 배열(`유사배열`)입니다. 메소드 이름도 Elements입니다
- document.getElementsByClassName(클래스)
- document.getElementsByName(이름) 
- document.getElementsByTagName(태그)
```js
document.getElementsByTagName('root');
document.getElementsByName('root');
document.getElementsByTagName('root');
```
### document.querySelector(선택자), document.querySelectorAll(선택자)
ss 선택자로 선택할 수 있게 해줍니다. 아이디는 #, 클래스는 .(점)입니다. 태그명[속성명=속성값] 같은 것도 할 수 있고, 부모 > 자식, 부모 자손 등등 css의 선택자는 거의 다 쓸 수 있습니다.
```js
document.querySelector('#app-root');
```
### document.createElement(태그명)
document에 새로운 태그를 만들 때 사용합니다. 만든다고 바로 생기는 게 아니라 변수를 통해 메모리에 저장됩니다.
```js
var div = document.createElement('div');
```
### document.createTextNode(텍스트)
```js
var text = document.createTextNode('텍스트');
```
### document.createDocumentFragment()
가짜 document를 만듭니다. 왜 이게 중요하냐면 자바스크립트로 document의 태그를 조작하는 것은 매우 성능이 떨어집니다.  가짜 document를 만들어서 여기에 추가를 한 후, 한 번에 document에 추가합니다. 이러면 진짜 document는 한 번만 조작하면 돼서 성능에 부담이 덜합니다.
```js
var div = document.createElement('div');
var text = document.createTextNode('텍스트');
var fragment = document.createDocumentFragment();
div.appendChild(text);
fragment.appendChild(div);
document.body.appendChild(fragment); // 직접적으로 body에 영향을 주는 것은 fragment를 추가할 때, 단 한 번
```
### Head, Body, Title 등...
- document.anchors
- document.links
- document.forms 
- document.images 
- document.scripts
- document.title

### Node와 Element
Node는 태그 노드와 텍스트 노드 전체를 가리키고, Element는 텍스트 노드를 제외하고, 흔히 생각하는 태그(<a>같은)만 가리킵니다. 따라서 태그만 검색하고 싶을 때는 Element가 붙은 메소드를 선택해야합니다. 
### 태그.children, 태그.childNodes
자식으로 갈 때는 children(텍스트 노드 제외)또는 childNodes(텍스트 노드 포함)를 사용합니다.
```js
document.body.children; // [header, main, footer, script] main을 선택하고 싶다면 document.body.children[1]을 선택하면 되는 거죠.
```
이 DOM의 속성들은 모든 태그에 다 사용할 수 있습니다. 즉 document부터 head, body, script, div, span 등 모든 태그에 다 지원됩니다.     
document.getElementById('header')로 가리킨 태그도document.getElementById('header').children하면 #header의 자식들이 나옵니다. 
### 태그.firstChild, 태그.firstElementChild, 태그.lastChild, 태그.lastElementChild
모든 자식을 선택하는 대신, 첫 번째 자식만 선택하고 싶다면 firstChild 속성이 있습니다. 마지막을 선택하고 싶으면 lastChild
### 태그.parentNode, 태그.parentElement
부모를 찾을 때는 parentNode 속성을 사용합니다.      
자식은 여러 개일 수 있기 때문에 children이나 childNodes같은 복수형 단어를 썼다면 부모는 항상 한명이기 때문에 단수형 parentNode입니다.
```js
document.body.parentNode;
```
### 태그.previousSibling, 태그.nextSibling, 태그.previousElementSibling, 태그.nextElementSibling
형제자매 태그를 찾을 때는 previousSibling, nextSibling을 씁니다. sibling이 형제자매라는 뜻이거든요. 각각 바로 전이나 바로 다음 형제자매를 찾아줍니다.
```js
document.getElementsByTagName('main')[0].nextSibling; // <footer></footer>
```
### 태그.innerHTML, 태그.outerHTML
선택한 태그의 내용물을 얻어오거나 바꿀 수 있습니다.
```js
var footer = document.getElementsByTagName('footer')[0];
footer.innerHTML; // 'hello'
footer.innerHTML = 'goodbye';
footer.innerHTML = '<b>bold</b>';

// 굵은 글씨의 bold 텍스트가 들어갑니다. outerHTML은 현재태그까지 포함한 문자열을 반환합니다.
footer.outerHTML = '<footer><b>bold</b></footer>';
```
### 태그.속성
태그를 선택하고 그 속성을 조회할 수 있습니다. 바꿀 수도 있고요. id, className(class), name, value, placeholder, checked, disabled, readonly 같은 속성 값을 볼 수 있습니다.
```js
var tag = document.getElementById('header');
tag.id; // 'header'
```
### 태그.attributes
해당 태그가 가진 모든 속성을 보고싶다면 attributes 속성을 사용하면 됩니다. 
### 태그.clientHeight, 태그.clientWidth
태그의 margin, border, scrollbar을 제외한 높이와 너비를 반환합니다.
### 태그.offsetHeight, 태그.offsetWidth
태그의 margin만 제외한 높이와 너비를 반환합니다.
### 태그.scrollHeight, 태그.scrollWidth

## 메소드
### 태그.appendChild
createElement() 함수로 만들었던 태그를 넣을 때 이 메소드가 필요합니다. 마지막 순서의 자식 태그로 추가됩니다.
```js
var newElement = document.createElement('div');
document.body.appendChild(newElement);
```
### 태그.removeChild
```js
document.body.removeChild(document.body.childNodes[document.body.childNodes.length - 1]);
```
### 태그.insertBefore
appendChild가 자식 태그로 집어넣는 거라면 insertBefore 메소드는 자신의 형제 태그로 집어넣습니다. 
```js
// 부모.insertBefore(넣을 태그, 기준 태그)
var newElement = document.createElement('div');
document.body.insertBefore(newElement, document.getElementById('header'));
```
### 태그.cloneNode
자신을 복사합니다
```js
var clone = document.getElementsByTagName('nav')[0].cloneNode();
```

## Reflow and Repaint(or ReDraw)
### Reflow 
생성된 DOM 노드의 레이아웃 수치(너비, 높이, 위치 등) 변경 시 영향 받은 모든 노드의(자신, 자식, 부모, 조상(결국 모든 노드) ) 수치를 다시 계산하여(Recalculate), 렌더 트리를 재생성하는 과정    
또한, `Reflow` 과정이 끝난 후 재 생성된 렌더 트리를 다시 그리게 되는데 이 과정을 `Repaint` 라 합니다.
```js
function reFlow() { 
  document.getElementById('container').style.width = '600px'; 
  return false; 
}
```

### 발생순서
- Click 이벤트 handler 
- Recalcurate(변경된 스타일 수치 계산 수행) 
- Layout(Reflow 과정 수행) 
- Paint(Repaint 과정 수행)

### Repaint 발생
Reflow 발생 이유와 같이 스타일의 모든 변경이 레이아웃 수치에 영향을 받는것은 아닙니다.      
즉, 아래 그래프 처럼 노드의 background-color, visibillty, outline 등의 스타일 변경 시에는 레이아웃 수치가 변경되지 않으므로 Reflow 과정이 생략된 Repaint 과정만 일어나게 됩니다.
```js
function rePaint() {
  document.getElementById('container').style.backgroundColor = 'red'; 
  return false; 
}
```
### Reflow 일어나는 상황
- 노드의 추가 또는 제거시. 
- 요소의 위치 변경 시. 
- 요소의 크기 변경 시.(margin, padding, border, width, height, 등..) 
- 폰트 변경 과(텍스트 내용) 이미지 크기 변경 시.(크기가 다른 이미지로 변경 시) 
- 페이지 초기 랜더링 시.(최초 Layout 과정) 
- 윈도우 리사이징 시.

### 최적화방법
##### 클래스 변화에 따른 스타일 변경 시, 최대한 DOM 구조 상 끝단에 위치한 노드에 주어야 합니다. 
- 가급적 말단에 위치한 노드 수치 변경 시 리플로우 수행 반경을 전체 노드가 아닌 일부 노드로 제한 시킬 수 있습니다. 즉, Reflow 수행 비용을 줄일 수 있다는 말과 같습니다.(하지만 실무 작업 시 적용 가능한 범위가 크지 않다) 

##### 인라인 스타일을 최대한 배제하라. 
- 적용 시 코드 가독성과 Reflow 비용을 줄일 수 있습니다. 

##### 애니메이션이 들어간 노드는 가급적 position:fixed 또는 position:absolute로 지정하여 전체 노드에서 분리 시키도록 합니다. 
- 보통 (JS(Javascript) + CSS)를 활용한 에니메이션 효과는 해당 프레임에 따라 무수히 많은 Reflow 비용이 발생하게 됩니다. 하지만 position 속성을 "fixed" 또는 "absoute"로 값을 주면 지정된 노드는 전체 노드에서 분리됩니다. 즉, 전체 노드에 걸쳐 Reflow 비용이 들지 않으며, 해당 노드의 Repaint 비용만 들어가게 됩니다. 
- 노드의 position 값을 초기에 적용하지 않았더라도 에니메이션 시작 시 값을 변경(fixed, absolute)하고 종료 시 다시 원복 시키는 방법을 사용해도 무관합니다.

##### 퀄리티와 퍼포먼스 사이에서 타협하라.
- 에니메이션 효과는 보통 무수히 많은 Reflow 비용이 들어가게 됩니다. 물론, 디바이스 환경에 따라 큰 성능 차이를 보일 수 있겠지만, 스마트폰 기기와 같은 경우 그리 좋은 성능을 보이지 못합니다. 따라서 에니메이션 효과와 같은 CPU 퍼포먼스 비용이 큰 작업은 언제나 퀼리티와 퍼포먼스 사이에 적당한 타협이 필요합니다.

##### 테이블 레이아웃을 피하라. 
- 테이블로 구성된 페이지 레이아웃은 점진적(progressive) 페이지 렌더링이 적용되지 않으며, 모두 로드되고 계산(Recalculate)된 후에야 화면에 뿌려지게 됩니다. 하지만 해당 테이블에 table-layout:fixed 속성을 주는 것이 디폴트값인 auto에 비해 성능면에서 더 좋다고 한다. 

##### IE의 경우, CSS에서의 JS표현식을 피하라. 
- 이미 오래된 규칙이지만 매우 효과적인 규칙입니다. CSS 표현식(expression)의 비용이 매우 높은 이유는, 문서 전체 또는 문서 중 일부가 Reflow될 때마다 표현식이 다시 계산되기 때문입니다. 결국 애니메이션과 같은 변화에 의해 리플로우가 발생했을 때, 경우에 따라 초당 수천, 수만번의 표현식 계산이 진행될 수 있다는 것을 의미합니다.

##### 캐쉬를 활용한 Reflow 최소화하라.  
- 브라우저는 레이아웃 변경을 큐에 저장했다가 한번에 실행하는 방법으로 Reflow 수를 줄입니다. 하지만 offset, scrollTop, scrollLeft, 값과 같은 계산된 스타일 정보를 요청할 때마다 정확한 정보를 제공하기 위해 큐를 비우고 모든 변경을 다시 적용합니다. 즉, 중복되는 수치에 대한 스타일 정보를 변수에 저장(캐쉬)해 요청수를 줄임으로써 Reflow 비용을 최소화시킵니다.
