import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0);
    
    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    function handleDeleteComment() {
        console.log("Deletar");

        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://avatars.githubusercontent.com/u/84483007?v=4" hasBorder = {false}/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}> 
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Sousa</strong>

                            <time title="11 de Abril ás 00:00" dateTime="2023-04-11 00:00:00">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>    
    )
}