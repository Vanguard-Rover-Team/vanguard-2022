#include <unistd.h>

#include "hello.hpp"

int main() {

    for (int i = 0;; i++) {
        hello(i);
        usleep(500000);
    }

    return 0;
}