export default function AccordionHeader({ children, active, first, last }) {

    let isActive = active ? " bg-primary text-white " : " text-secondary ";
    let isFirst = first ? " rounded-t-xl border-bottom-0 " : " ";
    let isLast = last ? " border-b " : " ";

    let additionClasses = isActive + isFirst + isLast;

    // Rotazione freccia
    let accordionArrow = active ? " rotate-180 fill-white" : " ";

        return (

        <h2>
            <button className={" flex items-center justify-between w-full p-5 font-bold border border-secondary" + additionClasses}>
                <span>{children}</span>
                <svg className={"h-5 w-5 " + accordionArrow} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6L269.8 394.5c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5L135.1 294.6c-4.5-4.2-7.1-10.1-7.1-16.3c0-12.3 10-22.3 22.3-22.3l57.7 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 57.7 0c12.3 0 22.3 10 22.3 22.3c0 6.2-2.6 12.1-7.1 16.3z"/></svg>
            </button>
        </h2>




    )

}