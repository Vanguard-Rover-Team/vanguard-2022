
#include <unistd.h>
#include <iostream>
#include <thread>
#include <chrono>
#include <zmq.hpp>
#include <zmq_addon.hpp>

using namespace std::chrono_literals;

static zmq::context_t ctx;

auto recv_B = []()
{
    zmq::socket_t sock(ctx, zmq::socket_type::sub);
    sock.set(zmq::sockopt::routing_id, "Dealer2");
    //sock.set(zmq::sockopt::subscribe, "Router");
    sock.connect("tcp://localhost:5556");
    std::cout << "Connected to Socket" << std::endl;

    while(1)
    {
        sock.set(zmq::sockopt::subscribe, "Dealer1");
        zmq::multipart_t recv_msg;
        auto recv_res = zmq::recv_multipart(sock, std::back_inserter(recv_msg));

        if(recv_res.has_value())
            std::cout << "--------------------\n";
            std::cout << "Received from Router" << std::endl;

        for (auto&& msg : recv_msg)
            std::cout << msg.str() << std::endl;
        std::cout << "End of Payload!\n\n";

        recv_msg.clear();
    }

};

int main()
{
    std::thread th1 = std::thread(recv_B);

    th1.join();
}