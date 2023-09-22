import myProvider from '../../../../NextAuth/myProvider';

export default NextAuth({
  providers: [
    myProvider,
    // Add other providers as needed
  ],

  callbacks: {
      
    // async jwt({ token, user, account, profile, isNewUser }) {
      
    //   return {...token, ...user}
    // },

      async session(session) {
  
        // session.user.role = token._doc?.role
        
        return session
      }
  }
});
