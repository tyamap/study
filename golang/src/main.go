package main

import (
	"fmt"
	"strconv"
)

func main () {
	for i := 1; i <= 100; i = i+1 {
		if i % 15 == 0 {
			fmt.Println(strconv.Itoa(i) + " - FizBuz!" )
		} else if i % 5 == 0 {
			fmt.Println(strconv.Itoa(i) + " - Buz!" )
		} else if i % 3 == 0 {
			fmt.Println(strconv.Itoa(i) + " - Fiz!" )
		} else {
			fmt.Println(i)
		}
	}
}