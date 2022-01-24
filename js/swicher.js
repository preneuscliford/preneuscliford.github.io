const styleSwich = document.querySelector( ".style-swich" );
const stgIcon = document.querySelector( ".stg" );
const colors = document.querySelector( ".colors" );
const day = document.querySelector( ".day" );
const moon = document.querySelector( ".moon" );
const header  = document.querySelector( "header " );
const main = document.querySelector( "main" );
const swichIcon = document.querySelector(".style-swich-icon")
const alternatStyle = document.querySelectorAll(".alternate-style")

stgIcon.addEventListener( "click", () => {
    styleSwich.classList.toggle( "active" );
} );

moon.addEventListener( "click", () => {
    header.classList.toggle( "dark" );
})


const swich = ()=>{
    if ( swichIcon.addEventListener( "click", () => { 
        header.classList.toggle( "dark" );
        main.classList.toggle( "dark" );
        moon.classList.toggle( "active" );
        day.classList.toggle( "active" );
    
    } ) ); 

}

swich();







window.addEventListener( "scroll", () => {
    if ( styleSwich.classList.contains( "active" ) ) {
        styleSwich.classList.remove( "active" )
    }
} )



const setActiveStyle = (color) => {
    alternatStyle.forEach( ( style )=>{
        
        if ( color === style.getAttribute("title") ) {
            style.removeAttribute( "disabled" );
        } else {
            style.setAttribute("disabled", "true")
        }
    })
}