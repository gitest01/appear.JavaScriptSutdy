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

