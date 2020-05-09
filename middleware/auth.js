export default function(context) {
  if (!context.store.getters['auth/isAuth']) {
    context.redirect('/admin/auth');
  }
}
