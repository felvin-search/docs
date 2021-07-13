# Our site is down, what to do?

*  The backend and frontend processes are running

  * Login to app@neera.ai

  ```text
  ssh app@neera.ai
  ```

  * Open the `tmux` session

  ```text
  tmux a -t neera
  ```

  * To check the frontend process, see `serve -s build -p 3000 -n` is up and running
  * To check the backend process, see `pm2 status`, the backend process should be up and running at port `5000`
  * Also check `pm2 log`

  ```text
  pm2 logs
  ```

*  Nginx is running

  * Login to server with

  ```text
  ssh root@neera.ai
  ```

  * Check status with

  ```text
  sudo service nginx status
  ```

  * Check the nginx config with

  ```text
  nginx -t
  ```

⚠️

If you are seeing SSL error it is probably happening because we were out of disk

*  We have available space in disk

  ```text
  df -h
  ```

  The output looks something like this, ensure there there is space available on the value mounted at `/`

  ```text
  ➜  ~ df -h
  Filesystem      Size  Used Avail Use% Mounted on
  udev            2.0G     0  2.0G   0% /dev
  tmpfs           394M  1.1M  393M   1% /run
  /dev/vda1        25G  9.3G   15G  39% /
  tmpfs           2.0G   16K  2.0G   1% /dev/shm
  tmpfs           5.0M     0  5.0M   0% /run/lock
  tmpfs           2.0G     0  2.0G   0% /sys/fs/cgroup
  /dev/vda15      105M  9.2M   96M   9% /boot/efi
  ```

  If the disk is full delete the `baloon.img` in, this will free up 1 GB of space giving you time to investigate the issue further

  ```text
  rm /baloon.img
  ```

  Investigate the reason, fix it and then create the baloon file again.

  ```text
  fallocate -l 1G baloon.img
  ```

