    auto seoul_time = std::chrono::zoned_time(seoul_tz, now);
                      ~~~~~~~~~~~~~^
main.cpp:17:23: error: no member named 'format' in namespace 'std'
              << std::format("{:%Y-%m-%d %H:%M:%S %Z}", seoul_time) << std::endl;
                 ~~~~~^
3 warnings and 3 errors generated.

    ~/W/Dev/S/cpp/seoul ▓▒░ g++ main.cpp -o main             ░▒▓ 1 ✘  system   04:48:35 PM 
main.cpp:7:5: warning: 'auto' type specifier is a C++11 extension [-Wc++11-extensions]
    auto now = std::chrono::system_clock::now();
    ^
main.cpp:10:5: warning: 'auto' type specifier is a C++11 extension [-Wc++11-extensions]
    auto seoul_tz = std::chrono::time_zone::locate("Asia/Seoul");
    ^
main.cpp:10:34: error: no member named 'time_zone' in namespace 'std::chrono'
    auto seoul_tz = std::chrono::time_zone::locate("Asia/Seoul");
                    ~~~~~~~~~~~~~^
main.cpp:13:5: warning: 'auto' type specifier is a C++11 extension [-Wc++11-extensions]
    auto seoul_time = std::chrono::zoned_time(seoul_tz, now);
    ^
main.cpp:13:36: error: no member named 'zoned_time' in namespace 'std::chrono'
    auto seoul_time = std::chrono::zoned_time(seoul_tz, now);
                      ~~~~~~~~~~~~~^
main.cpp:17:23: error: no member named 'format' in namespace 'std'
              << std::format("{:%Y-%m-%d %H:%M:%S %Z}", seoul_time) << std::endl;
                 ~~~~~^
3 warnings and 3 errors generated.

    ~/W/Dev/S/cpp/seoul ▓▒░ clear                            ░▒▓ 1 ✘  system   04:48:42 PM 
d#include <iostream>
#include <chrono>
#include <format>

int main() {
    // 현재 시스템 시간을 UTC로 가져오기
    auto now = std::chrono::system_clock::now();

    // 서울 시간대 정의 (UTC+9)
    auto seoul_tz = std::chrono::time_zone::locate("Asia/Seoul");

    // 현재 시간을 서울 시간대로 변환
    auto seoul_time = std::chrono::zoned_time(seoul_tz, now);

    // 시간 출력
    std::cout << "현재 서울 시간: "
              << std::format("{:%Y-%m-%d %H:%M:%S %Z}", seoul_time) << std::endl;

    return 0;
}
~
~
~
~
~
~
~
~
~
-- INSERT --
