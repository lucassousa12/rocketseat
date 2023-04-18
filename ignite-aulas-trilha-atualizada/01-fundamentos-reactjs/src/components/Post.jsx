import { useState } from "react";

import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"
 
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles  from "./Post.module.css";


export function Post({author, content, publishedAt}) {

    const [comments, setComments] = useState([
       'Post muito bacana, hein?!'
    ]);

    const [newCommentText ,setNewCommentText] = useState("");

    const isNewCommentEmpty = newCommentText.length == 0;

    const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow =  formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    
    function handleCreateNewComment() {
        event.preventDefault(); //Previone o comportamento padrão do submit.
        
        setComments([...comments, newCommentText])
        setNewCommentText("");

    }
    
    function handleNewCommentChange() {
        event.target.setCustomValidity("");
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete) {
        //imutabilidade -> As variáveis não sofrem alterações, nós criamos um novo espaço na memória.

        const commentsWithoutDeleteOne = comments.filter( comment => {
            return comment != commentToDelete;
        })

        setComments(commentsWithoutDeleteOne);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity("Este campo é obrigatório");
    }

    return (
        <article className = {styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src= {author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {
                    content.map(line => {

                        if(line.type == 'paragraph') {

                            return <p key={line.content}>{line.content}</p>;

                        } else if (line == "link") {

                            return <p key={line.content}><a href="#">{line.content}</a></p>

                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name="commentInput"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button 
                        type="submit" 
                        disabled = {isNewCommentEmpty}
                    >Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return (
                            <Comment 
                                key={comment}
                                content = {comment} 
                                onDeleteComment = {deleteComment} 
                            />
                        )
                    })
                }
            </div>
        </article>
    )
}