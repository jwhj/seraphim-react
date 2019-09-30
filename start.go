package main

import (
	"bufio"
	"fmt"
	"io"
	"os/exec"
)

func execWithOutput(cmd *exec.Cmd, flag int) {
	var pipe io.Reader
	if flag == 0 {
		pipe, _ = cmd.StdoutPipe()
	} else {
		pipe, _ = cmd.StderrPipe()
	}
	cmd.Start()
	reader := bufio.NewReader(pipe)
	for {
		str, _, err := reader.ReadLine()
		if err != nil || err == io.EOF {
			fmt.Println(err)
			break
		}
		fmt.Println(string(str))
	}
	cmd.Wait()
}
func main() {
	cmd1 := exec.Command("node", "index.js")
	cmd1.Dir = "./backend"
	go execWithOutput(cmd1, 1)
	cmd2 := exec.Command("node", "serve.js", "debug")
	cmd2.Dir = "./frontend"
	go execWithOutput(cmd2, 0)
	for {

	}
}
