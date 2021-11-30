
#include <unistd.h>
#include <iostream>
#include <thread>
#include <chrono>
#include <zmq.hpp>
#include <zmq_addon.hpp>

using namespace std::chrono_literals;

static zmq::context_t ctx;

auto send_A = []()
{
    zmq::socket_t sock(ctx, zmq::socket_type::dealer);
    sock.set(zmq::sockopt::routing_id, "Dealer3");
    sock.connect("tcp://localhost:5555");
    std::cout << "Connected to Socket" << std::endl;

    int counter = 800;

    while(1)
    {
        zmq::multipart_t recv_name(std::string("D3"));
        zmq::multipart_t send_msg(std::string(std::to_string(counter)));

        zmq::multipart_t payload;
        
        payload.append(std::move(recv_name));
        payload.append(std::move(send_msg));

        auto send_res = zmq::send_multipart(sock, payload, zmq::send_flags::none);

        counter++;

        std::this_thread::sleep_for(300ms);
    }

    
};

int main()
{
    std::thread th0 = std::thread(send_A);

    th0.join();
}
