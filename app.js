document.addEventListener('DOMContentLoaded', () => {
    const csrfToken = document.querySelector('input[name="csrfmiddlewaretoken"]')?.value;

    document.querySelectorAll('.btn-like').forEach(button => {
        button.addEventListener('click', async () => {
            const postId = button.dataset.postId;
            const response = await fetch(`/api/posts/${postId}/like/`, {
                method: 'POST',
                headers: {'X-CSRFToken': csrfToken || '', 'Content-Type': 'application/json'}
            });
            const data = await response.json();
            button.querySelector('.like-count').textContent = data.likes_count;
        });
    });

    document.querySelectorAll('.comment-form').forEach(form => {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const postId = form.dataset.postId;
            const input = form.querySelector('input[name="content"]');
            const response = await fetch(`/api/posts/${postId}/comment/`, {
                method: 'POST',
                headers: {'X-CSRFToken': csrfToken || '', 'Content-Type': 'application/json'},
                body: JSON.stringify({content: input.value})
            });
            if (response.ok) {
                input.value = '';
                loadComments(postId);
            }
        });
    });

    document.querySelectorAll('.follow-btn').forEach(button => {
        button.addEventListener('click', async () => {
            const userId = button.dataset.userId;
            const action = button.textContent.includes('Unfollow') ? 'unfollow' : 'follow';
            const endpoint = action === 'follow' ? `/api/users/${userId}/follow/` : `/api/users/${userId}/unfollow/`;
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: {'X-CSRFToken': csrfToken || '', 'Content-Type': 'application/json'}
            });
            if (response.ok) {
                button.textContent = action === 'follow' ? 'Unfollow' : 'Follow';
            }
        });
    });

    document.querySelectorAll('.comment-list').forEach(container => {
        const postId = container.dataset.commentList;
        loadComments(postId);
    });
});

async function loadComments(postId) {
    const container = document.querySelector(`[data-comment-list="${postId}"]`);
    if (!container) return;
    const response = await fetch(`/api/posts/${postId}/comment/`);
    const comments = await response.json();
    container.innerHTML = comments.map(comment => `
        <div class="comment-item">
            <strong>${comment.author.username}</strong>
            <div>${comment.content}</div>
            <div class="muted">${comment.created_at}</div>
        </div>
    `).join('');
}
