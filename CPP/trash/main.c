#include <stdio.h>

int main() {
	int m;
	int n = 6;

	m = (n++) - (--n) - (n--) + (++n);
	printf("%d, %d\n", m, n);
	return 0;
}
