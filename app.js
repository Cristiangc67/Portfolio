document.querySelector('#hamburguer').addEventListener(
    'click', (a) =>{
        a.currentTarget.classList.toggle('activated');
    });
/* ****************************clase-show******************************* */
//agrega la clase show a todos los elementos que poseen la clase hidden
//cuandoestos aparecen en pantalla(animacion solo se reproduce una vez)
    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries)  {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
        };
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');
    
    for (const hiddenItem of hiddenElements) {
        observer.observe(hiddenItem);
    }