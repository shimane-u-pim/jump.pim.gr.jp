import styles from './move-external-page.module.css';

export default function MoveExternalPage({
    author,
    url,
}) {
    return (
        <>
            <h1>ページを移動します</h1>
            <p>
                この先は{ author }の管理するページになります。
                移動してもよろしいですか？
            </p>
            <div className={styles.MoveButtonHolder}>
                <a href={ url } role="button">はい</a>
            </div>
        </>
    );
};