const dogCounter = document.querySelector(".dogCounter");
const catCounter = document.querySelector(".catCounter");
const otherCounter = document.querySelector(".otherCounter");
const sectionOne = document.querySelector('.section-one');
const sectionTwo = document.querySelector('.section-two');
const block = document.querySelectorAll('.block');
let doCount = true;
const imgContainer = document.querySelector('.images');
let dogsArray;

const dogs = fetch("https://dog.ceo/api/breeds/image/random/50")
.then(response => response.json())
.then(data => data.message);

async function getImages(){
    dogsArray = await dogs;
    for (let i = 0; i<dogsArray.length; i++) {
        let img = document.createElement('img');
        img.src = `${dogsArray[i]}`
        imgContainer.appendChild(img);
    }
    const masonry = new Macy({
        container: '.images',
        mobileFirst: true,
        columns: 3,
        breakAt:{
            1200: 7,
            1100: 6,
            1000: 5,
            500: 4,
        },
        margin: {
            x:0,
            y:0,
        }
    
    });
}
getImages();

const setStyles = () => {
    block.forEach(block=>{
        block.style.width = `${block.offsetHeight}px`;
    })
}
setStyles();
window.addEventListener('resize', setStyles)



function animateValue(obj, start, end, duration){
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

window.addEventListener('scroll', ()=>{
    if(doCount){
        if(window.scrollY >= sectionTwo.offsetHeight){
            animateValue(dogCounter, 0, 100, 500);
            animateValue(catCounter, 0, 21, 500);
            animateValue(otherCounter, 0, 12, 500);
            doCount = false;

        }
    }
})

const sectionThree = document.querySelector(".section-three")
const panelBtns = document.querySelectorAll('.panel button');
let text;
panelBtns.forEach(btn => {
    btn.addEventListener('click', function(e){
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let circle = document.createElement('span');
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        this.appendChild(circle);

        setTimeout(()=> {
            circle.remove()
        },400)

        const parent = this.parentNode.parentNode;

        const textPanels = document.querySelectorAll(".panel-text");
        textPanels.forEach(textPanel => {
            const x = textPanel.getAttribute('data-number');
            const y = parent.getAttribute('data-number');
            if(x == y){
                textBlock = textPanel;
            }
        })

const panelNumber = parent.getAttribute("data-number");
let textPanel;
switch(panelNumber){
    case 'one':
        textPanel = document.querySelector('.panel-text:nth-last-child(2)');
        textPanel.innerHTML = "<h1>O schronisku!</h1><p>Schronisko jest doskonałym miejscem gdzie można sobie znaleźć czworonożnego przyjaciela. Ciągle trafiają do nas coraz to nowe szczeniaki oraz dorosłe psy. Biorąc psa ze schroniska nie tylko oszczędzasz pieniądze ale również: robisz dobry uczynek, masz możliwość dowiedzenia się czegoś o cechach psychicznych zwierzęcia i to nie od sprzedawcy zainteresowanego przede wszystkim doprowadzeniem transakcji do końca ale od pracowników schroniska mających kontakt ze zwierzęciem na co dzień, zanim podejmiesz decyzję możesz odwiedzić schronisko wielokrotnie, poobserwować zwierzęta i na spokojnie podjąć decyzję. Jeżeli nie znajdziesz odpowiedniego zwierzaka wystarczy, że odczekasz kilka tygodni. Na pewno odwiedzając nas ponownie znajdziesz nowych pensjonariuszy, ze zwierzakiem ze schroniska możesz się fantastycznie dogadać.</p>"
        break;
    case 'two':
        textPanel = document.querySelector('.panel-text:nth-last-child(1)')
        textPanel.innerHTML = "<h1>Jak wygląda adopcja?</h1><p>Przed adopcją odbywa się rozmowa oraz wizyta przed adopcyjna. Następnie zapoznanie z psiakiem w schronisku i podpisanie umowy adopcyjnej. W przypadku psów niewykastrowanych w schronisku, nowy opiekun zobowiązany jest do wykonania tego zabiegu za darmo w wyznaczonej przez gminę Gdańska lub na własny koszt.</p>"
        break;
    case 'three':
        textPanel = document.querySelector('.panel-text:nth-last-child(2)')
        textPanel.innerHTML = "<h1>Wolontariat</h1><p>Wolontariusze pomagają przede wszystkim w wyprowadzaniu psów na spacery oraz pracach porządkowych na wybiegach. Wolontariusze z dłuższym stażem z czasem wchodzą na teren schroniska, jednak z racji bezpieczeństwa tylko pod opieką członków schroniska,zachowując przy tym ostrożność. Pomagają w sprzątaniu, karmieniu, dokładaniu słomy.</p>"
        break;
    case 'four':
        textPanel = document.querySelector('.panel-text:nth-last-child(1)')
        textPanel.innerHTML = "<h1>Przekaż swój 1%</h1><p>Schronisko dla psów jest organizacją pożytku publicznego, dzięki czemu możecie Państwo przekazać 1% swojego podatku właśnie nam! Wielu naszych podopiecznych wymaga specjalnej opieki. Pieski, które trafiają do naszego schroniska, często mają problemy zdrowotne, które potrzebują wizyty u wyspecjalizowanych lekarzy weterynarii, bywa też, że muszą być żywione specjalistyczną karmą. 1% podatku wspomoże nas w ratowaniu tych potrzebujących istot. Bez Państwa wsparcia nie jesteśmy w stanie funkcjonować. Naszym jedynym źródłem finansowania są darowizny, dlatego apelujemy o wsparcie nas 1% podatku.</p>"
        break;
        
}
const textPanelPosition = textPanel.getAttribute('data-position');
        if(!parent.classList.contains('active')){
            text = this.textContent;
            if(textPanelPosition == "left"){
                tl.set(parent, {zIndex:3})
                .to(parent, 1, {height:"100%"})
                .set(this,{text:"Back"})
                .set(textPanel, {zIndex:2})
                .to(textPanel,1 ,{left:"50%"})
            }
            else if(textPanelPosition == "right"){
                tl.set(parent, {zIndex:3})
                .to(parent, 1, {height:"100%"})
                .set(this,{text:"Back"})
                .set(textPanel, {zIndex:2})
                .to(textPanel,1 ,{right:"50%"})
            }
            parent.classList.add("active");
    }
    else{
        if(textPanelPosition == "left"){
            tl.to(textPanel, 1, {left:"0%"})
            .set(textPanel, {zIndex:0})
            .to(parent,1, {height:"50%"})
            .set(this,{text:`${text}`})
            .set(parent, {zIndex:1})
        }
        else if(textPanelPosition == "right"){
            tl.to(textPanel, 1, {right:"0%"})
            .set(textPanel, {zIndex:0})
            .to(parent,1, {height:"50%"})
            .set(this,{text:`${text}`})
            .set(parent, {zIndex:1})
        }
        parent.classList.remove("active");
}
    })
    function removeFieldError(field) {
        const errorText = field.nextElementSibling;
        if (errorText !== null) {
            if (errorText.classList.contains("form-error-text")) {
                errorText.remove();
            }
        }
    };
    
    function createFieldError(field, text) {
        removeFieldError(field); //przed stworzeniem usuwam by zawsze był najnowszy komunikat
    
        const div = document.createElement("div");
        div.classList.add("form-error-text");
        div.innerText = text;
        if (field.nextElementSibling === null) {
            field.parentElement.appendChild(div);
        } else {
            if (!field.nextElementSibling.classList.contains("form-error-text")) {
                field.parentElement.insertBefore(div, field.nextElementSibling);
            }
        }
    };
    
    function toggleErrorField(field, show) {
        const errorText = field.nextElementSibling;
        if (errorText !== null) {
            if (errorText.classList.contains("form-error-text")) {
                errorText.style.display = show ? "block" : "none";
                errorText.setAttribute('aria-hidden', show);
            }
        }
    };
    
    function markFieldAsError(field, show) {
        if (show) {
            field.classList.add("field-error");
        } else {
            field.classList.remove("field-error");
            toggleErrorField(field, false);
        }
    };
    
    //pobieram elementy
    const form = document.querySelector("#contactForm");
    const inputs = form.querySelectorAll("[required]");
    
    form.setAttribute("novalidate", true);
    
    //etap 1 : podpinam zdarzenia
    for (const el of inputs) {
        el.addEventListener("input", e => markFieldAsError(e.target, !e.target.checkValidity()));
    }
    
    form.addEventListener("submit", e => {
        e.preventDefault();
    
        let formErrors = false;
    
        //2 etap - sprawdzamy poszczególne pola gdy ktoś chce wysłać formularz
        for (const el of inputs) {
            removeFieldError(el);
            el.classList.remove("field-error");
    
            if (!el.checkValidity()) {
                createFieldError(el, el.dataset.errorText);
                el.classList.add("field-error");
                formHasErrors = true;
            }
        }
    
        if (!formErrors) {
            //form.submit();
            //dane będziemy wysyłać dynamicznie!
        }
    });
})
const tl = new TimelineMax();
