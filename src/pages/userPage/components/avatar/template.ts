import styles from './avatar.module.scss';

export const avatar = `  <form class="${styles.wrapper}">
  <div class="${styles.imgContainer}">
  
  <img src="{{avatarSrc}}"= alt="avatar">
  </div>
  <input type="file" name="Avatar">
  
  <h1>
    {{login}}
</h1>
<div class="${styles.btn}">
<button  type="submit">Обновить</button>
</div>

</form>`;
