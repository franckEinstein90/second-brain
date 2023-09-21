
# SSH Keys

For a more secure and convenient way to use SSH, you can set up SSH keys. This involves generating a pair of cryptographic keys on your local machine, then adding the
public key to the remote server. Once this is done, the server can confirm your identity automatically without needing a password.

To generate SSH keys, use the following command:

```
ssh-keygen
```

You can just press enter to accept the default file locations and passphrase. Once the keys are generated, you can add the public key to the 
remote server with the following command (replacing username and server as before):

Check if SSH is installed: In a Linux or macOS terminal, type ssh and press enter. If SSH is installed, you will see a usage summary. If not, you'll need to install it (in Ubuntu, for example, you can use sudo apt-get install openssh-server to install SSH).

Connecting to the remote server: To connect to the remote server, you'll need its IP address or domain name, and you'll need a user account on the server. The basic SSH command looks like this:

css
Copy code
ssh username@server
Replace username with your username on the remote server, and replace server with the server's IP address or domain name. Press enter, and you'll be prompted to enter your password.


sql
Copy code
ssh-copy-id username@server
