#include <iostream>

class Marine {
    int hp;
    int coordX, coordY;
    bool isDead;

    const int defaultDamage;

    // 멤버 변수들은 이런 식으로 초기화 할 수 없음
    //static int numOfMarine = 0;
    static int numOfMarine;

    // const static은 가능
    const static int x = 0;

public:
    Marine();
    Marine(int x, int y);
    Marine(int defaultDamage);

    int attack();
    void beAttacked(int damageEarned);
    void move(int x, int y);

    void showStatus();
};

/**
 * 초기화 리스트
 * Initializer list
 * 생성자 호출과 동시에 멤버 변수를 초기화
 * 
 * 래퍼런스들은 모두 생성과 동시에 초기화가 되어야함.
*/

Marine::Marine() : 
    hp(50), coordX(0), coordY(0),
    isDead(false), defaultDamage(5) {}

Marine::Marine(int x, int y) :
    coordX(x), coordY(y), hp(50),
    isDead(false), defaultDamage(5) {}

Marine::Marine(int defaultDamage): 
    hp(50), coordX(0), coordY(0),
    isDead(false), defaultDamage(defaultDamage) {}


void Marine::move(int x, int y) {
    coordX = x;
    coordY = y;
}

int Marine::attack() {
    return defaultDamage;
}

void Marine::beAttacked(int damageEarned) {
    hp -= damageEarned;
    if (hp <= 0) {
        isDead = true;
    }
}

void Marine::showStatus() {
    std::cout << "Status" << std::endl;
    std::cout << "LOC : " << coordX << ", " << coordY
    << std::endl;
    std::cout << "HP : " << hp << std::endl;
}

int main() {
    Marine marine1(2, 3);
    Marine marine2(3, 5);

    marine1.showStatus();
    marine2.showStatus();
}