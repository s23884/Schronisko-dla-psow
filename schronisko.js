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
        textPanel.innerHTML = "<h1>O schronisku!</h1><p>Schronisko jest doskona??ym miejscem gdzie mo??na sobie znale???? czworono??nego przyjaciela. Ci??gle trafiaj?? do nas coraz to nowe szczeniaki oraz doros??e psy. Bior??c psa ze schroniska nie tylko oszcz??dzasz pieni??dze ale r??wnie??: robisz dobry uczynek, masz mo??liwo???? dowiedzenia si?? czego?? o cechach psychicznych zwierz??cia i to nie od sprzedawcy zainteresowanego przede wszystkim doprowadzeniem transakcji do ko??ca ale od pracownik??w schroniska maj??cych kontakt ze zwierz??ciem na co dzie??, zanim podejmiesz decyzj?? mo??esz odwiedzi?? schronisko wielokrotnie, poobserwowa?? zwierz??ta i na spokojnie podj???? decyzj??. Je??eli nie znajdziesz odpowiedniego zwierzaka wystarczy, ??e odczekasz kilka tygodni. Na pewno odwiedzaj??c nas ponownie znajdziesz nowych pensjonariuszy, ze zwierzakiem ze schroniska mo??esz si?? fantastycznie dogada??.</p>"
        break;
    case 'two':
        textPanel = document.querySelector('.panel-text:nth-last-child(1)')
        textPanel.innerHTML = "<h1>Jak wygl??da adopcja?</h1><p>Przed adopcj?? odbywa si?? rozmowa oraz wizyta przed adopcyjna. Nast??pnie zapoznanie z psiakiem w schronisku i podpisanie umowy adopcyjnej. W przypadku ps??w niewykastrowanych w schronisku, nowy opiekun zobowi??zany jest do wykonania tego zabiegu za darmo w wyznaczonej przez gmin?? Gda??ska lub na w??asny koszt.</p>"
        break;
    case 'three':
        textPanel = document.querySelector('.panel-text:nth-last-child(2)')
        textPanel.innerHTML = "<h1>Wolontariat</h1><p>Wolontariusze pomagaj?? przede wszystkim w wyprowadzaniu ps??w na spacery oraz pracach porz??dkowych na wybiegach. Wolontariusze z d??u??szym sta??em z czasem wchodz?? na teren schroniska, jednak z racji bezpiecze??stwa tylko pod opiek?? cz??onk??w schroniska,zachowuj??c przy tym ostro??no????. Pomagaj?? w sprz??taniu, karmieniu, dok??adaniu s??omy.</p>"
        break;
    case 'four':
        textPanel = document.querySelector('.panel-text:nth-last-child(1)')
        textPanel.innerHTML = "<h1>Przeka?? sw??j 1%</h1><p>Schronisko dla ps??w jest organizacj?? po??ytku publicznego, dzi??ki czemu mo??ecie Pa??stwo przekaza?? 1% swojego podatku w??a??nie nam! Wielu naszych podopiecznych wymaga specjalnej opieki. Pieski, kt??re trafiaj?? do naszego schroniska, cz??sto maj?? problemy zdrowotne, kt??re potrzebuj?? wizyty u wyspecjalizowanych lekarzy weterynarii, bywa te??, ??e musz?? by?? ??ywione specjalistyczn?? karm??. 1% podatku wspomo??e nas w ratowaniu tych potrzebuj??cych istot. Bez Pa??stwa wsparcia nie jeste??my w stanie funkcjonowa??. Naszym jedynym ??r??d??em finansowania s?? darowizny, dlatego apelujemy o wsparcie nas 1% podatku.</p>"
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
        removeFieldError(field); //przed stworzeniem usuwam by zawsze by?? najnowszy komunikat
    
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
    
        //2 etap - sprawdzamy poszczeg??lne pola gdy kto?? chce wys??a?? formularz
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
            //dane b??dziemy wysy??a?? dynamicznie!
        }
    });
})
const tl = new TimelineMax();
