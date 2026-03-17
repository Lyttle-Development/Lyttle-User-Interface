import styles from './showcase.module.scss';

export function ShowcaseBrand({href = '/', name, accent}: {
    href?: string;
    name: string;
    accent?: string;
}) {
    return (
        <a href={href} className={styles.topBarBrand}>
            {accent ? <span className={styles.topBarBrandAccent}>{accent}</span> : null}
            <span>{accent ? ` ${name}` : name}</span>
        </a>
    );
}

