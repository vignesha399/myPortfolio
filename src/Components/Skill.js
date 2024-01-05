import css from './Skills.module.css'


export function Skills(){
    return (
        <>
            <div className={css.skillsDiv} id={css.skillsDiv + "skillsDiv"}>
                <h1 id='skillsDiv'>Skills</h1>
                <ul id={css.skills} className={css.skills}>
                    <li className={css.list} id={css.html}>HTML </li>
                    <li className={css.list} id={css.css}>Css </li>
                    <li className={css.list} id={css.javascript}>JavaScript </li>
                    <li className={css.list} id={css.java}>Java </li>
                    <li className={css.list} id={css.nodejs}>NODE js </li>
                    <li className={css.list} id={css.react}>React </li>
                    <li className={css.list} id={css.sql}>SQL </li>
                    <li className={css.list} id={css.sql}>Postgres </li>
                    <li className={css.list} id={css.sql}>Git </li>
                    <li className={css.list} id={css.sql}>OOPs </li>
                    <li className={css.list} id={css.linux}>Linux </li>
                    <li className={css.list} id={css.webDev}>Web Development </li>
                </ul>
            </div>
        </>
    )
}

