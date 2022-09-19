import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


interface CommentProps {
    content: string;
    onDeleteComment: (comment: string)=> void;
}

export function Comment({content, onDeleteComment}: CommentProps){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state) =>{
            return state +1;
        } );
    }
    
    return(
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/ronanavila.png" alt=""/>

            <div className={styles.commentBox}>

                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>José Manuel</strong>
                            <time title="05 de setembro de 2022 às 01:01h" dateTime="2022-09-05 01:01:00">Cerca de 1 hora </time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp onClick={handleLikeComment}/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}